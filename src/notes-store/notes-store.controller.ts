import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete, 
  Put 
} from '@nestjs/common';

import { NotesStoreService } from './notes-store.service';
import { NotesStore } from './entities/notes-store.entity';
import { CreateNotesStoreDto } from './dto/create-notes-store.dto';
import { UpdateNotesStoreDto } from './dto/update-notes-store.dto';

@Controller('notes-store')
export class NotesStoreController {

  constructor(private readonly notesStoreService: NotesStoreService) {}

  @Post()
  create(@Body() createNotesStoreDto: CreateNotesStoreDto) : Promise<NotesStore>{
    return this.notesStoreService.create(createNotesStoreDto);
  }

  @Post('populate-notes')
  populateNotes(): Promise<String>{
    return this.notesStoreService.populateTables();
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

  @Get('by-sprint/:idSprint')
  findBySprint(
    @Param('idSprint') idSprint: string): Promise<NotesStore[]> {
    return this.notesStoreService.findBySprint(idSprint);
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

  @Get('sprint/:idSprint/:idUser/:idProj/:idCriteria')
  getSelfNotes(
    @Param('idSprint') idSprint: string,
    @Param('idUser') idUser: string,
    @Param('idProj') idProj: string,
    @Param('idCriteria') idCriteria: string
    ): Promise<any>  { 
      return this.notesStoreService.getSelfNotes(idSprint,  idUser, idProj, idCriteria); 
  }
}