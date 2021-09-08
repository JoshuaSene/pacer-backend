import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectCriterionDto } from './dto/create-project-criterion.dto';
import { UpdateProjectCriterionDto } from './dto/update-project-criterion.dto';
import { ProjectCriterion } from './entities/project-criterion.entity';

@Injectable()
export class ProjectCriteriaService {

  constructor( 
    @InjectRepository(ProjectCriterion) 
    private projectCriterionRepository: Repository<ProjectCriterion>,
  ) {}
  
  
  async create(createProjectCriterionDto: CreateProjectCriterionDto): Promise<ProjectCriterion>  {
    const criteria =  this.projectCriterionRepository.create(
      createProjectCriterionDto
    ); 
    const criteriaSaved =  this.projectCriterionRepository.save(criteria);
    return criteriaSaved ;
  }

 async findAll(): Promise<ProjectCriterion[]>  {
    return this.projectCriterionRepository.find();
  }

 async find(id: string): Promise<ProjectCriterion[]>  {
    const criterias = await this.projectCriterionRepository.find({
      id_criterio: `${id}`
    }) 
    if (criterias.length == 0) {
      throw new NotFoundException('Criteria does not exists.');
    }
    return criterias
  }

  async update(id: string, updateProjectCriterionDto: UpdateProjectCriterionDto): Promise<ProjectCriterion> {
    const criteria: any = await this.projectCriterionRepository.findOne(id);
    const mergeCriteria = this.projectCriterionRepository.merge(criteria, updateProjectCriterionDto);
    return  this.projectCriterionRepository.save(mergeCriteria);
 
  }

  async delete(id: string) : Promise<string>  {
  const projectCrit = this.projectCriterionRepository.delete(id)
  return `id ${id} has been deleted`
  }
}
