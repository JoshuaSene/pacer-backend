import { Repository } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaDto } from './dto/create-criteria.dto'; 
import { UpdateCriterionDto } from './dto/update-criteria.dto';

@Injectable()
export class CriteriaService {

  constructor( 
    @InjectRepository(Criteria) 
    private criterionRepository: Repository<Criteria>
  ) {}
  
  
  async create(createCriteriaDto: CreateCriteriaDto): Promise<Criteria>  {
    const criteria = this.criterionRepository.create(
      createCriteriaDto
    ); 
    const criteriaSaved = this.criterionRepository.save(criteria);
    return criteriaSaved;
  }

  async findAll(): Promise<Criteria[]>  {
    return this.criterionRepository.find();
  }

  async find(id: string, snAtivo: string): Promise<Criteria>  {
    const criteria = await this.criterionRepository.findOne({
      idCriteria: `${id}`, 
      snAtivo: `${snAtivo}`
    });

    if (!criteria) {
      throw new NotFoundException(`Criteria does not exists.`);
    }
    return criteria;
  }

  async update(id: string, updateCriterionDto: UpdateCriterionDto): Promise<Criteria> {
    const criteria: Criteria = await this.criterionRepository.findOne(id);

    if (!criteria) {
      throw new NotFoundException(`Criteria with id ${id} does not exists.`);
    }

    const mergeCriteria = this.criterionRepository.merge(criteria, updateCriterionDto);
    return  this.criterionRepository.save(mergeCriteria);
  }

  async delete(id: string) : Promise<string> {
    const criteria: Criteria = await this.criterionRepository.findOne(id);
    
    if (!criteria) {
      throw new NotFoundException(`Criteria with id ${id} does not exists.`);
    }

    try {
      this.criterionRepository.delete(id);
      return `Criteria with id ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error Deleting Criteria! \nMessage: ${error}`);
    }
  }
}
