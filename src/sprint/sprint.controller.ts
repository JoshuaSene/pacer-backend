import { Controller, Get, Post, Body,Param, Delete, Query, Put } from '@nestjs/common'; 
import { Sprint } from './entities/sprint.entity';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { SprintService } from './sprint.service';

@Controller('sprint')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @Post()
  create(@Body() CreateSprintDto: CreateSprintDto): Promise<Sprint> {
    return this.sprintService.create(CreateSprintDto);
  }

  @Get()
  findAll(): Promise<Sprint[]>  { 
    return this.sprintService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string, 
    @Query('initialDate') initialDate: Date 
    ): Promise<Sprint[]>  {
    const sprint = this.sprintService.find(id, initialDate);
    return sprint;
  }
  
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateSprintDto: UpdateSprintDto
    ):Promise<Sprint>  {
      return this.sprintService.update(id, UpdateSprintDto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string):Promise<String>  {
    return this.sprintService.delete(id);
  }
}
