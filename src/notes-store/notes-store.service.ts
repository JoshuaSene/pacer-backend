import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';
import { NotesStore } from './entities/notes-store.entity';

@Injectable()
export class NotesStoreService {

  constructor( 
    @InjectRepository(NotesStore) 
    private noteStoreRepository: Repository<NotesStore>,
  ) {}

 
  async create(createNotesStoreDto: CreateNotesStoreDto): Promise<NotesStore>  {
    const notes =  this.noteStoreRepository.create(
      createNotesStoreDto
    ); 
    const notesStoreSaved =  this.noteStoreRepository.save(notes);
    return notesStoreSaved;
  }

  async findAll(): Promise<NotesStore[]>  {
    return this.noteStoreRepository.find();
  }

  
 async find(id: string): Promise<NotesStore[]>  {
   const notes = await this.noteStoreRepository.find({
    
    idAvaliacao: `${id}`
     
   }) 
   if (notes.length == 0) {
     throw new NotFoundException('Avaliation does not exists.');
   }
   return notes
 }

 async update(id: string, updateNotesDto: UpdateNotesStoreDto): Promise<NotesStore> {
  const notes: any = await this.noteStoreRepository.findOne(id);
  const mergeNotes = this.noteStoreRepository.merge(notes, updateNotesDto);
  return  this.noteStoreRepository.save(mergeNotes);

}

  async delete(id: string) : Promise<string>  { 
    const projectCrit = this.noteStoreRepository.delete(id)
    return `id ${id} has been deleted`
    }
}
