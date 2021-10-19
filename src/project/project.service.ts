import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project) 
    private repository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject: Project = this.repository.create(
      createProjectDto.formatDates()
    );

    return await this.repository.save(createdProject); 
  }

  async findAll(): Promise<Project[]> {
    return this.repository.find(); 
  }

  async findOne(id: string): Promise<Project> {
    return await this.repository.findOne(id); 
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const project = await this.repository.findOne(id);
    const merge = this.repository.merge(project, dto);
    return await this.repository.save(merge); 
  }

  async remove(id: string): Promise<string>  {
    const project = await this.repository.findOne(id);
    this.repository.delete(project.idProject);
    return `Project ${id} has been deleted`; 
  }
}
