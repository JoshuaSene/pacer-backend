import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './../user/entities/user.entity';
import { NotesStore } from './entities/notes-store.entity';
import { Sprint } from './../sprint/entities/sprint.entity';
import { Project } from 'src/project/entities/project.entity';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';
import { UserTeam } from './../user-team/entities/user-team.entity';
import { ReturnNotesDashboardDto } from './dto/return-notes-dashboard.dto';
import { ProjectUser } from './../project-user/entities/project-user.entity';
import { CriteriaProject } from './../criteria-project/entities/criteria-project.entity';

@Injectable()
export class NotesStoreService {

  constructor( 
    @InjectRepository(NotesStore) 
    private noteStoreRepository: Repository<NotesStore>,
    @InjectRepository(Sprint) 
    private sprintRepository: Repository<Sprint>,
    @InjectRepository(UserTeam) 
    private userTeamRepository: Repository<UserTeam>,
    @InjectRepository(CriteriaProject) 
    private criteriaProjectRepository: Repository<CriteriaProject>,
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>,
    @InjectRepository(ProjectUser) 
    private projectUserRepository: Repository<ProjectUser>,
  ) {}

  async create(createNotesStoreDto: CreateNotesStoreDto): Promise<NotesStore>  {
    const notes = this.noteStoreRepository.create(
      createNotesStoreDto
    ); 
    
    const notesStoreSaved = this.noteStoreRepository.save(notes);
    return notesStoreSaved;
  }

  async findAll(): Promise<NotesStore[]>  {
    return this.noteStoreRepository.find();
  }
  
  async find(id: string): Promise<NotesStore>  {
    const note: NotesStore = await this.noteStoreRepository.findOne(id); 
   
    if (!note || note === undefined) {
      throw new NotFoundException(`Evaluation with id ${id} does not exists.`);
    }

    return note;
  }

  async findPendingEvaluations(idEvaluator: string, idSprint: string): Promise<NotesStore[]>  {
    const notes = await this.noteStoreRepository.find({
      where: { 
        note: null, 
        idEvaluator: `${idEvaluator}` ,
        idSprint: `${idSprint}`
      }
    });

    if (!notes || notes.length === 0 || notes === undefined) {
      throw new NotFoundException(`There are no pending evaluations for this id ${idEvaluator}`)
    }

    return notes;
  }

  async findAllPendingEvaluations(idSprint: string): Promise<NotesStore[]>  {
    const notes = await this.noteStoreRepository.find({
      where: { 
        note: null,
        idSprint: `${idSprint}`
      }
    });

    if (!notes || notes.length === 0 || notes === undefined) {
      throw new NotFoundException('There are no pending evaluations');
    }
    
    return notes;
  }

  
  async update(id: string, updateNotesDto: UpdateNotesStoreDto): Promise<NotesStore> {
    const note: NotesStore = await this.noteStoreRepository.findOne(id);

    if (!note || note === undefined) {
      throw new NotFoundException(`Evaluation with id ${id} does not exists.`);
    }

    const mergeNotes = this.noteStoreRepository.merge(note, updateNotesDto);
    return  this.noteStoreRepository.save(mergeNotes);
  }

  async delete(id: string): Promise<string> { 
    const note: NotesStore = await this.noteStoreRepository.findOne(id);

    if (!note || note === undefined) {
      throw new NotFoundException(`Evaluation with id ${id} does not exists.`);
    }

    try {
      this.noteStoreRepository.delete(note);
      return `Note ${id} has been deleted`; 
    } catch (error) {
      throw new Error(`Error Deleting Note! \nMessage: ${error}`);
    }
  }
  
  async populateTables(): Promise<string> {    
    const sprints = await this.sprintRepository.find();
    
    if(sprints) {
      sprints.forEach(async sprint => {
        if(sprint.didStart() && !sprint.didEnd()) {
          // Check if there are notes for this sprint already
          const notes = await this.noteStoreRepository.find({
            where: {
              idSprint: sprint.idSprint
            }
          });

          if(notes.length > 0) {
            return;
          }         

          const projectId = sprint.idProject;
          const project = await this.projectRepository.findOne(projectId);
          let everyone = project.everyoneEvaluates();
  
          const criterias = await this.criteriaProjectRepository.find({
            where: {
              idProject: projectId
            }
          });

          // Get teacher ids
          const projectUsers = await this.projectUserRepository.find({
            where: {
              idProject: `${projectId}`
            }
          });
          
          // get users for every team
          project.teams.forEach(async team => {
            let notesStoreArray: CreateNotesStoreDto[] = []
            let ids: string[] = [];
            let teacherIds: string[] = projectUsers.map(val => val.idUser);
            let scrumMaster: User = new User();
            
            const users = await this.userTeamRepository.find({
              idTeam: team.idTeam
            });
            
            if(users && criterias) {
              users.forEach(userTeam => {  
                ids.push(userTeam.idUser);
                // find scrum master       
                if(userTeam.isScrumMaster) {
                  scrumMaster = userTeam.user;
                }
  
                // set payload for notesStore
                criterias.forEach(criteria => {
                  let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
                  payload.idEvaluator = userTeam.idUser;
                  payload.idEvaluated = userTeam.idUser;
                  payload.idGroup = userTeam.idTeam;
                  payload.idSprint = sprint.idSprint;
                  payload.idCriteria = criteria.idCriteria;
                  payload.obs = "";
                  notesStoreArray.push(payload);
                });
              });

              if(scrumMaster) {                
                if(everyone) {
                  ids.concat(teacherIds);
                  users.forEach(userTeam => {   
                    for(let i = 0; i < ids.length; i++) {
                      const evaluator = ids[i];
                      
                      if(userTeam.idUser !== evaluator) {
                        criterias.forEach(criteria => {
                          let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
                          payload.idEvaluator = evaluator;
                          payload.idEvaluated = userTeam.idUser;
                          payload.idGroup = userTeam.idTeam;
                          payload.idSprint = sprint.idSprint;
                          payload.idCriteria = criteria.idCriteria;
                          payload.obs = "";
                          notesStoreArray.push(payload);
                        });
                      }
                    }                   
                  });        
                } else {
                  let payloadIds = teacherIds;
                  payloadIds.push(scrumMaster.idUser);

                  // Scrum master and teacher evaluation tables
                  users.forEach(userTeam => {   
                    for(let i = 0; i < payloadIds.length; i++) {
                      const evaluator = payloadIds[i];
                      
                      if(userTeam.idUser !== evaluator) {
                        criterias.forEach(criteria => {
                          let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
                          payload.idEvaluator = evaluator;
                          payload.idEvaluated = userTeam.idUser;
                          payload.idGroup = userTeam.idTeam;
                          payload.idSprint = sprint.idSprint;
                          payload.idCriteria = criteria.idCriteria;
                          payload.obs = "";
                          notesStoreArray.push(payload);
                        });
                      }
                    }                   
                  }); 

                  const usersArrayWOScrumMaster = users.filter(user => user.idUser !== scrumMaster.idUser);

                  // Setting student evaluators for Scrum Master
                  let i = 0;
                  usersArrayWOScrumMaster.every(userTeam => {  
                    if(i === 2) return false;
                    const evaluator = userTeam.idUser
                    
                    if(userTeam.idUser !== scrumMaster.idUser) {
                      criterias.forEach(criteria => {
                        let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
                        payload.idEvaluator = evaluator;
                        payload.idEvaluated = scrumMaster.idUser;
                        payload.idGroup = userTeam.idTeam;
                        payload.idSprint = sprint.idSprint;
                        payload.idCriteria = criteria.idCriteria;
                        payload.obs = "";
                        notesStoreArray.push(payload);
                      });
                      i++;
                    }    
                    return true;            
                  }); 

                  // atribuindo mais um para o resto
                  let count = 0;
                  usersArrayWOScrumMaster.forEach(async userTeam => {
                    
                    for(let i = 0; i < usersArrayWOScrumMaster.length; i++) {
                      if(count === 1) break;

                      const evaluator = usersArrayWOScrumMaster[i];
                    
                      if(userTeam.idUser !== evaluator.idUser 
                        && userTeam.idUser !== scrumMaster.idUser) {
                        
                        let previousEvaluation = notesStoreArray.filter(item => {
                          return item.idEvaluator === evaluator.idUser &&
                            item.idEvaluated === userTeam.idUser;
                        });

                        if(previousEvaluation && previousEvaluation.length > 0) {
                          break;
                        }

                        previousEvaluation = await this.noteStoreRepository.find({
                          where: {
                            idEvaluator: evaluator.idUser,
                            idEvaluated: userTeam.idUser
                          }
                        });

                        if(previousEvaluation && previousEvaluation.length > 0) {
                          break;
                        }

                        criterias.forEach(criteria => {
                          let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
                          payload.idEvaluator = evaluator.idUser;
                          payload.idEvaluated = userTeam.idUser;
                          payload.idGroup = userTeam.idTeam;
                          payload.idSprint = sprint.idSprint;
                          payload.idCriteria = criteria.idCriteria;
                          payload.obs = "";
                          notesStoreArray.push(payload);
                        });
                        count++;
                      }
                    }
                  });
                }

                console.log(`Payload Array: ${notesStoreArray}`);
                notesStoreArray.forEach( payload => {   
                  const notes = this.noteStoreRepository.create(
                    payload
                  ); 
                  this.noteStoreRepository.save(notes);
                });
              }
            }
          });
        } else {
          console.log("sprint did not start");
        }
      });
    }
    return 'Successfully populated tables!';
  }
  
  async getSelfNotes(idSprint: string, idUser: string, idProj: string, idCriteria: string ): Promise<any>  {
 

    const getSelfNotes = await getConnection().query(
      `select *
      from notes_store ns 
      inner join sprint s on ns.id_sprint = s.id_sprint  
      inner join criteria_project cco on s.id_project = cco.id_project and cco.id_criteria = ns.id_criteria
      where s.id_project ='${idProj}'
      and ns.id_evaluated = '${idUser}' 
      and ns.id_evaluator = '${idUser}' 
      and ns.id_criteria = '${idCriteria}'
      `
    );
  
    
    if (!getSelfNotes) {
      throw new NotFoundException('getSelfNotes Invalid');
    }
    var notasf = 0;
    var pesosf = 0;
    for(var i = 0; i < getSelfNotes.length; i++) {
      pesosf = getSelfNotes[i].grade_weight
      notasf += getSelfNotes[i].note
    }
    const mediasf = (notasf/getSelfNotes.length) * pesosf

    const selfNotes= {
      getSelfNotes: getSelfNotes,
      selfNoteAvg: mediasf
    }


   const getTeamNotes = await getConnection().query(
    `select *
    from notes_store ns 
    inner join sprint s on ns.id_sprint = s.id_sprint  
    inner join criteria_project cco on s.id_project = cco.id_project and cco.id_criteria = ns.id_criteria
    where s.id_project ='${idProj}'
    and ns.id_evaluated = '${idUser}' 
    and ns.id_evaluator <> '${idUser}' 
    and ns.id_criteria = '${idCriteria}'
    `
  );

     
  if (!getTeamNotes) {
    throw new NotFoundException('getTeamNotes Invalid');
  }
  var notatn = 0;
  var pesotn = 0;
  for(var i = 0; i < getTeamNotes.length; i++) {
    pesotn = getTeamNotes[i].grade_weight
    notatn += getTeamNotes[i].note
  }

  const mediatn = (notatn/getTeamNotes.length) * pesotn

  const teamNotes= {
    getTeamNotes: getTeamNotes,
    teamNoteAvg: mediatn
  }

  
    if (!teamNotes) {
      throw new NotFoundException('TeamNotes Invalid');
    }
    
    return {selfNotes, teamNotes}
  }
}