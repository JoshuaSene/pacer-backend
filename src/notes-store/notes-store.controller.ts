import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesStoreService } from './notes-store.service';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';

@Controller('notes-store')
export class NotesStoreController {
  constructor(private readonly notesStoreService: NotesStoreService) {}

  @Post()
  create(@Body() createNotesStoreDto: CreateNotesStoreDto) {
    return this.notesStoreService.create(createNotesStoreDto);
  }

  @Get()
  findAll() {
    return this.notesStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesStoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotesStoreDto: UpdateNotesStoreDto) {
    return this.notesStoreService.update(+id, updateNotesStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesStoreService.remove(+id);
  }
}
