import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProjectCriteriaService } from './project-criteria.service';
import { CreateProjectCriterionDto } from './dto/create-project-criterion.dto';
import { UpdateProjectCriterionDto } from './dto/update-project-criterion.dto';

@Controller('project-criteria')
export class ProjectCriteriaController {
  constructor(private readonly projectCriteriaService: ProjectCriteriaService) {}

  @Post()
  create(@Body() createProjectCriterionDto: CreateProjectCriterionDto) {
    return this.projectCriteriaService.create(createProjectCriterionDto);
  }

  @Get()
  findAll() {
    return this.projectCriteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const criteria = this.projectCriteriaService.findOne(id);
    if (!criteria) {
      throw new NotFoundException('Criteria does not exists.');
    }
    return criteria;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectCriterionDto: UpdateProjectCriterionDto) {
    return this.projectCriteriaService.update(id, updateProjectCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectCriteriaService.remove(id);
  }
}
