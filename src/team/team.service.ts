import { Repository } from 'typeorm'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto'; 
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {

  constructor( 
    @InjectRepository(Team) 
    private teamRepository: Repository<Team>
  ) {}  
  
  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create(
      createTeamDto
    ); 
    const teamSaved = this.teamRepository.save(team);
    return teamSaved;
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async find(id: string): Promise<Team> {
    const team = await this.teamRepository.findOne(id) 

    if (!team || team === undefined) {
      throw new NotFoundException(`Team with id ${id} does not exists.`);
    }

    return team
  }

  async update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const team: Team = await this.teamRepository.findOne(id);

    if (!team || team === undefined) {
      throw new NotFoundException(`Team with id ${id} does not exists.`);
    }

    const mergeTeam = this.teamRepository.merge(team, updateTeamDto);
    return this.teamRepository.save(mergeTeam);
  }

  async delete(id: string) : Promise<string> {
    const team: Team = await this.teamRepository.findOne(id);

    if (!team || team === undefined) {
      throw new NotFoundException(`Team with id ${id} does not exists.`);
    }

    try {
      this.teamRepository.delete(team);
      return `Team ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error Deleting Team! \nMessage: ${error}`);
    }
  }
}
