import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Criteria } from 'src/criteria/entities/criteria.entity';
import { CriteriaProject } from './entities/criteria-project.entity';
import { CreateCriteriaProjectDto } from './dto/create-criteria-project.dto';
import { UpdateCriteriaProjectDto } from './dto/update-criteria-project.dto';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class CriteriaProjectService {

  constructor( 
    @InjectRepository(CriteriaProject) 
    private repository: Repository<CriteriaProject>,
    @InjectRepository(Criteria) 
    private criteriaRepository: Repository<Criteria>,
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>,
  ) {}
  
  
  async create(createCriteriaDto: CreateCriteriaProjectDto): Promise<CriteriaProject>  {
    const criteria = await this.criteriaRepository.findOne(createCriteriaDto.idCriteria);

    if(!criteria || criteria === null) {
      throw new NotFoundException(`Criteria with id ${createCriteriaDto.idCriteria} not found.`)
    }

    const project = await this.projectRepository.findOne(createCriteriaDto.idProject);

    if(!project || project === null) {
      throw new NotFoundException(`Project with id ${createCriteriaDto.idProject} not found.`)
    }

    const createdCriteria = this.repository.create(
      createCriteriaDto
    ); 
    const criteriaSaved = this.repository.save(createdCriteria);
    return criteriaSaved ;
  }

  async findAll(): Promise<CriteriaProject[]>  {
    return this.repository.find();
  }

  async find(idCriteria: string, idProject: string, snActivated: string): Promise<CriteriaProject>  {
    const criteria = await this.repository.findOne({
      where: {
        idCriteria: `${idCriteria}`,
        idProject: `${idProject}`, 
        snActivated: `${snActivated}`
      }
    }) 
    if (!criteria) {
      throw new NotFoundException(`CriteriaProject does not exists for project: ${idProject} and criteria: ${idCriteria}.`);
    }
    return criteria
  }

  async findForProject(idProject: string, snActivated: string): Promise<CriteriaProject[]>  {
    const criterias = await this.repository.find({
      where: {
        idProject: `${idProject}`, 
        snActivated: `${snActivated}`
      }
    }) 
    if (criterias.length == 0) {
      throw new NotFoundException(`CriteriaProject does not exists for project: ${idProject}.`);
    }
    return criterias
  }

  async findForCriteria(idCriteria: string, snActivated: string): Promise<CriteriaProject[]>  {
    const criterias = await this.repository.find({
      where: {
        idCriteria: `${idCriteria}`,
        snActivated: `${snActivated}`
      }
    }) 
    if (criterias.length == 0) {
      throw new NotFoundException(`CriteriaProject does not exists for criteria: ${idCriteria}.`);
    }
    return criterias
  }

  async update(idCriteria: string, idProject: string, dto: UpdateCriteriaProjectDto): Promise<CriteriaProject> {
    const criteria: any = await this.repository.findOne({
      where: {
        idCriteria: `${idCriteria}`, 
        idProject: `${idProject}`
      }
    });
    const merge = this.repository.merge(criteria, dto);
    return await this.repository.save(merge);
  }

  async delete(idCriteria: string, idProject: string) : Promise<string>  {
    const projectCrit = await this.repository.delete({
      idCriteria: idCriteria,
      idProject: idProject
    });
    return `CriteriaProject for project ${idProject} and criteria ${idCriteria} has been deleted`;
  }
}
