import { Helper } from './../commons/helper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project) 
    private repository: Repository<Project>
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
    const project = await this.repository.findOne(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} does not exists.`);
    }

    return project;
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const project = await this.repository.findOne(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} does not exists.`);
    }

    const mergePayload = {
      description: dto.description,
      openingDate: Helper.stringToDate(dto.openingDate, "dd/MM/yyyy","/"),
      closeDate: Helper.stringToDate(dto.closeDate, "dd/MM/yyyy","/"),
      evaluationFormat: dto.evaluationFormat
    }

    const merge = this.repository.merge(project, mergePayload);
    return await this.repository.save(merge); 
  }

  async remove(id: string): Promise<string>  {
    const project = await this.repository.findOne(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} does not exists.`);
    }

    try {
      this.repository.delete(project.idProject);
      return `Project ${id} has been deleted`; 
    } catch (error) {
      throw new Error(`Error Deleting Project! \nMessage: ${error}`);
    }
  }
}
