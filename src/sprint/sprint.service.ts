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

 async find(id: string, initialDate: Date): Promise<Sprint[]>  {
    const sprints = await this.sprintRepository.find({
     
      idSprint: `${id}`, 
      initialDate: `${initialDate}`,
      
    }) 
    if (sprints.length == 0) {
      throw new NotFoundException('Sprint does not exists.');
    }
    return sprints
  }

  async update(id: string, updateSprintDto: UpdateSprintDto): Promise<Sprint> {
    const sprint: any = await this.sprintRepository.findOne(id);
    const mergeSprint = this.sprintRepository.merge(sprint, updateSprintDto);
    return  this.sprintRepository.save(mergeSprint);
 
  }

  async delete(id: string) : Promise<string>  {
  const sprint = this.sprintRepository.delete(id)
  return `Sprint id ${id} has been deleted`
  }
}
