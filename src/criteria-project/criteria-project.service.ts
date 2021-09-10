import { Injectable } from '@nestjs/common';
import { CreateCriteriaProjectDto } from './dto/create-criteria-project.dto';
import { UpdateCriteriaProjectDto } from './dto/update-criteria-project.dto';

@Injectable()
export class CriteriaProjectService {
  create(createCriteriaProjectDto: CreateCriteriaProjectDto) {
    return 'This action adds a new criteriaProject';
  }

  findAll() {
    return `This action returns all criteriaProject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criteriaProject`;
  }

  update(id: number, updateCriteriaProjectDto: UpdateCriteriaProjectDto) {
    return `This action updates a #${id} criteriaProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} criteriaProject`;
  }
}
