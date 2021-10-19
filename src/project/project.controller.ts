import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll(); 
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectService.findOne(id); 
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateProjectDto: UpdateProjectDto): Promise<Project> {
    return this.projectService.update(id, updateProjectDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<String> {
    return this.projectService.remove(id); 
  }
}
