import { Injectable, NotFoundException } from '@nestjs/common';
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
  
  
  create(createProjectCriterionDto: CreateProjectCriterionDto) {
    const criteria =  this.projectCriterionRepository.create(
      createProjectCriterionDto
    ); 
    const criteriaSaved =  this.projectCriterionRepository.save(criteria);
    return criteriaSaved ;
  }

//   findAll() {
//     return this.Criterion;
//   }

//   findOne(id: number) {
//     const criteriaId = this.Criterion.findIndex((criteria) => criteria.id_criterio === id);
//     return this.Criterion[criteriaId];
//   }

//   update(id: number, updateProjectCriterionDto: UpdateProjectCriterionDto) {
//     const criteria = this.findOne(id);
//     const newCriteria = {
//       ...criteria,
//       ...updateProjectCriterionDto,
//     }
//     const criteriaId = this.Criterion.findIndex((criteria) => criteria.id_criterio === id);
//     this.Criterion[criteriaId] = newCriteria;
//     return newCriteria;
//   }

//   remove(id: number) {
//     const criteriaId = this.Criterion.findIndex((criteria) => criteria.id_criterio === id);

//     if (criteriaId === -1) {
//       throw new NotFoundException(`criteria #${id} not found`) 
//     }

//     this.Criterion.splice(criteriaId, 1);
//     return `criteria #${id} has been deleted`;
//   }
}
