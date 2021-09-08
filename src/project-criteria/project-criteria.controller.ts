import { Controller, Get, Post, Body,Param, Delete, Query, Put } from '@nestjs/common';
import { ProjectCriteriaService } from './project-criteria.service';
import { CreateProjectCriterionDto } from './dto/create-project-criterion.dto';
import { UpdateProjectCriterionDto } from './dto/update-project-criterion.dto';
import { ProjectCriterion } from './entities/project-criterion.entity';

@Controller('project-criteria')
export class ProjectCriteriaController {
  constructor(private readonly projectCriteriaService: ProjectCriteriaService) {}

  @Post()
  create(@Body() createProjectCriterionDto: CreateProjectCriterionDto): Promise<ProjectCriterion> {
    return this.projectCriteriaService.create(createProjectCriterionDto);
  }

  @Get()
  findAll(): Promise<ProjectCriterion[]>  { 
    return this.projectCriteriaService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string, 
    ): Promise<ProjectCriterion[]>  {
    const criteria = this.projectCriteriaService.find(id);
    return criteria;
  }
  
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectCriterionDto: UpdateProjectCriterionDto
    ):Promise<ProjectCriterion>  {
      return this.projectCriteriaService.update(id, updateProjectCriterionDto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string):Promise<String>  {
    return this.projectCriteriaService.delete(id);
  }
}
