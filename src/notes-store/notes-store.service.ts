import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { NotesStore } from './entities/notes-store.entity';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';
import { ReturnNotesDashboardDto } from './dto/return-notes-dashboard.dto';
import { reduce } from 'rxjs';

@Injectable()
export class NotesStoreService {

  constructor( 
    @InjectRepository(NotesStore) 
    private noteStoreRepository: Repository<NotesStore>
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

  async delete(id: string) : Promise<string> { 
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
