import { Injectable } from '@nestjs/common';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';

@Injectable()
export class NotesStoreService {
  create(createNotesStoreDto: CreateNotesStoreDto) {
    return 'This action adds a new notesStore';
  }

  findAll() {
    return `This action returns all notesStore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notesStore`;
  }

  update(id: number, updateNotesStoreDto: UpdateNotesStoreDto) {
    return `This action updates a #${id} notesStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} notesStore`;
  }
}
