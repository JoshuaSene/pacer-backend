import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { CreateTeamDto } from './dto/create-team.dto'; 
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {

  constructor( 
    @InjectRepository(Team) 
    private teamRepository: Repository<Team>,
  ) {}
  
  
  async create(createTeamDto: CreateTeamDto): Promise<Team>  {
    console.log(createTeamDto)
    const team =  this.teamRepository.create(
      createTeamDto
    ); 
    const teamSaved =  this.teamRepository.save(team);
    return teamSaved ;
  }

 async findAll(): Promise<Team[]>  {
    return this.teamRepository.find();
  }

 async find(id: string, snAtivo: string): Promise<Team[]>  {
   console.log(id, snAtivo)
    const teams = await this.teamRepository.find({
     
      idTeam: `${id}`, 
      snActivated: `${snAtivo}`,
      
    }) 
    if (teams.length == 0) {
      throw new NotFoundException('Team does not exists.');
    }
    return teams
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const Team: any = await this.teamRepository.findOne(id);
    const mergeTeam = this.teamRepository.merge(Team, updateTeamDto);
    return  this.teamRepository.save(mergeTeam);
  }

  async delete(id: string) : Promise<string>  {
  const projectCrit = this.teamRepository.delete(id)
  return `id ${id} has been deleted`
  }
}
