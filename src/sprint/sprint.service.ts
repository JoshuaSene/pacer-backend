import { Repository } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Sprint } from './entities/sprint.entity';
import { User } from './../user/entities/user.entity';
import { CreateSprintDto } from './dto/create-sprint.dto'; 
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { Project } from 'src/project/entities/project.entity';
import { UserTeam } from './../user-team/entities/user-team.entity';
import { NotesStore } from './../notes-store/entities/notes-store.entity';
import { CreateNotesStoreDto } from './../notes-store/dto/create-notes-store.dto';
import { CriteriaProject } from './../criteria-project/entities/criteria-project.entity';

@Injectable()
export class SprintService {

  constructor( 
    @InjectRepository(Sprint) 
    private sprintRepository: Repository<Sprint>,
    @InjectRepository(NotesStore) 
    private notesStoreRepository: Repository<NotesStore>,
    @InjectRepository(UserTeam) 
    private userTeamRepository: Repository<UserTeam>,
    @InjectRepository(CriteriaProject) 
    private criteriaProjectRepository: Repository<CriteriaProject>,
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>
  ) {}

  async create(createSprintDto: CreateSprintDto): Promise<Sprint>  {
    const sprint =  this.sprintRepository.create(
      createSprintDto.formatDates()
    ); 
    const sprintSaved = await this.sprintRepository.save(sprint);
    
    this.populateNotesStore(sprintSaved, createSprintDto.idProject);

    return sprintSaved;
  }

  async findAll(): Promise<Sprint[]>  {
    return this.sprintRepository.find();
  }

  async find(id: string): Promise<Sprint>  {
    const sprint = await this.sprintRepository.findOne(id) 

    if(!sprint || sprint === undefined) {
      throw new NotFoundException(`Sprint with id ${id} does not exist`);
    }
    
    return sprint
  }

  async update(id: string, updateSprintDto: UpdateSprintDto): Promise<Sprint> {
    const sprint: Sprint = await this.sprintRepository.findOne(id);

    if(!sprint || sprint === undefined) {
      throw new NotFoundException(`Sprint with id ${id} does not exist`);
    }
    
    const mergeSprint = this.sprintRepository.merge(sprint, updateSprintDto.formatDateFields());
    return  this.sprintRepository.save(mergeSprint);
  }

  async delete(id: string) : Promise<string>  {
    const sprint: Sprint = await this.sprintRepository.findOne(id);
    if(!sprint) {
      throw new NotFoundException(`Sprint with id ${id} does not exist`);
    }

    try {
      this.sprintRepository.delete(sprint);
      return `Sprint id ${id} has been deleted`
    } catch (error) {
      throw new Error(`Error Deleting sprint! \nMessage: ${error}`);
    }
  }

  private async populateNotesStore(sprint: Sprint, projectId: string) {
    // **Create notes_store for users and criterias**

    // get project
    const project = await this.projectRepository.findOne(projectId);

    // get criterias
    const criterias = await this.criteriaProjectRepository.find({
      where: {
        idProject: project.idProject
      }
    });

    let notesStoreArray: CreateNotesStoreDto[] = []

    // get users for every team
    project.teams.forEach(async team => {
      let scrumMaster: User = new User();

      const users = await this.userTeamRepository.find({
        idTeam: team.idTeam
      });

      if(users && criterias) {
        users.forEach(userTeam => {   
          // find scrum master       
          if(userTeam.isScrumMaster) {
            scrumMaster = userTeam.user;
          }

          // set payload for notesStore
          criterias.forEach(criteria => {
            let payload: CreateNotesStoreDto = new CreateNotesStoreDto();
            payload.idEvaluated = userTeam.idUser;
            payload.idGroup = userTeam.idTeam;
            payload.idSprint = sprint.idSprint;
            payload.idCriteria = criteria.idCriteria;
            payload.obs = "";
            notesStoreArray.push(payload);
          });
        });

        // set scrumMaster as evaluator on payloads and create entities
        notesStoreArray.forEach( payload => {   
          if(payload.idEvaluated !== scrumMaster.idUser) {
            payload.idEvaluator = scrumMaster.idUser;
            const notes = this.notesStoreRepository.create(
              payload
            ); 
            
            this.notesStoreRepository.save(notes);
          }    
        })
      }
    });
  }
}
