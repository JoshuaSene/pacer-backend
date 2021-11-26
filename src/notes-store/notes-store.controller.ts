import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { NotesStoreService } from './notes-store.service';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';
import { NotesStore } from './entities/notes-store.entity';
import { ReturnNotesDashboardDto } from './dto/return-notes-dashboard.dto';

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
  
  @Get('pending/:idEvaluator/:idSprint')
  findPending(
    @Param('idEvaluator') idEvaluator: string, 
    @Param('idSprint') idSprint: string
    ): Promise<NotesStore[]>  {
    return this.notesStoreService.findPendingEvaluations(idEvaluator, idSprint );
  }

  @Get('pendingAll/:idSprint')
  findAllPending(
    @Param('idSprint') idSprint: string
    ): Promise<NotesStore[]>  {
    return this.notesStoreService.findAllPendingEvaluations(idSprint );
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

  @Get('sprint/:idSprint/:idUser/:idCriteria/:idProj')
  getSelfNotes(
    @Param('idSprint') idSprint: string,
    @Param('idUser') idUser: string,
    @Param('idCriteria') idCriteria: string,
    @Param('idProj') idProj: string
    ): Promise<ReturnNotesDashboardDto>  { 
    return this.notesStoreService.getSelfNotes(idSprint, idUser,idCriteria, idProj );
  }
}
