import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { NotesStore } from './entities/notes-store.entity';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';

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
}
