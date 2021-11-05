import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NotesStoreService } from './notes-store.service';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';
import { NotesStore } from './entities/notes-store.entity';

@Controller('notes-store')
export class NotesStoreController {
  constructor(private readonly notesStoreService: NotesStoreService) {}

  @Post()
  create(@Body() createNotesStoreDto: CreateNotesStoreDto) : Promise<NotesStore>{
    return this.notesStoreService.create(createNotesStoreDto);
  }

  @Get()
  findAll() : Promise<NotesStore[]>{
    return this.notesStoreService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string
    ): Promise<NotesStore>  {
    const note = this.notesStoreService.find(id);
    return note;
  }
  
  @Get('pending/:idEvaluator')
  findPending(
    @Param('idEvaluator') idEvaluator: string, 
    ): Promise<NotesStore[]>  {
    return this.notesStoreService.findPendingEvaluations(idEvaluator);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectCriterionDto: UpdateNotesStoreDto
    ):Promise<NotesStore>  {
      return this.notesStoreService.update(id, updateProjectCriterionDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string):Promise<String>  {
    return this.notesStoreService.delete(id);
  }
}
