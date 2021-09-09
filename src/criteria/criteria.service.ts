import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { CreateCriteriaDto } from './dto/create-criteria.dto'; 
import { UpdateCriterionDto } from './dto/update-criteria.dto';
import { Criteria } from './entities/criteria.entity';

@Injectable()
export class CriteriaService {

  constructor( 
    @InjectRepository(Criteria) 
    private criterionRepository: Repository<Criteria>,
  ) {}
  
  
  async create(createCriteriaDto: CreateCriteriaDto): Promise<Criteria>  {
    const criteria =  this.criterionRepository.create(
      createCriteriaDto
    ); 
    const criteriaSaved =  this.criterionRepository.save(criteria);
    return criteriaSaved ;
  }

 async findAll(): Promise<Criteria[]>  {
    return this.criterionRepository.find();
  }

 async find(id: string, snAtivo: string): Promise<Criteria[]>  {
   console.log(id, snAtivo)
    const criterias = await this.criterionRepository.find({
     
      idCriteria: `${id}`, 
        snAtivo: `${snAtivo}`,
      
    }) 
    if (criterias.length == 0) {
      throw new NotFoundException('Criteria does not exists.');
    }
    return criterias
  }

  async update(id: string, updateCriterionDto: UpdateCriterionDto): Promise<Criteria> {
    const criteria: any = await this.criterionRepository.findOne(id);
    const mergeCriteria = this.criterionRepository.merge(criteria, updateCriterionDto);
    return  this.criterionRepository.save(mergeCriteria);
 
  }

  async delete(id: string) : Promise<string>  {
  const projectCrit = this.criterionRepository.delete(id)
  return `id ${id} has been deleted`
  }
}
