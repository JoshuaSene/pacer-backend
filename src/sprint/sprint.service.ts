import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { CreateSprintDto } from './dto/create-sprint.dto'; 
import { UpdateSprintDto } from './dto/update-sprint.dto';
import { Sprint } from './entities/sprint.entity';

@Injectable()
export class SprintService {

  constructor( 
    @InjectRepository(Sprint) 
    private sprintRepository: Repository<Sprint>,
  ) {}
  
  
  async create(createSprintDto: CreateSprintDto): Promise<Sprint>  {
    const sprint =  this.sprintRepository.create(
      createSprintDto.formatDates()
    ); 
    const sprintSaved =  this.sprintRepository.save(sprint);
    return sprintSaved ;
  }

  async findAll(): Promise<Sprint[]>  {
    return this.sprintRepository.find();
  }

  async find(id: string): Promise<Sprint>  {
    const sprint = await this.sprintRepository.findOne(id) 

    if(sprint === undefined) {
      throw new NotFoundException(`Sprint with does not exist`);
    }
    
    return sprint
  }

  async update(id: string, updateSprintDto: UpdateSprintDto): Promise<Sprint> {
    const sprint: Sprint = await this.sprintRepository.findOne(id);
    const mergeSprint = this.sprintRepository.merge(sprint, updateSprintDto.formatDateFields());
       
    return  this.sprintRepository.save(mergeSprint);
  }

  async delete(id: string) : Promise<string>  {
    this.sprintRepository.delete(id)
    return `Sprint id ${id} has been deleted`
  }
}
