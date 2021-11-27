import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Team } from './../team/entities/team.entity';
import { User } from './../user/entities/user.entity';
import { UserTeam } from './entities/user-team.entity';
import { CreateUserTeamDto } from './dto/create-user-team.dto';
import { UpdateUserTeamDto } from './dto/update-user-team.dto';

@Injectable()
export class UserTeamService {

  constructor( 
    @InjectRepository(UserTeam) 
    private repository: Repository<UserTeam>,
    @InjectRepository(User) 
    private userRepository: Repository<User>,
    @InjectRepository(Team) 
    private teamRepository: Repository<Team>
  ) {}

  async create(createUserTeamDto: CreateUserTeamDto): Promise<UserTeam> {
    const user = await this.userRepository.findOne(createUserTeamDto.idUser);

    if(!user || user === null) {
      throw new NotFoundException(`Could not find User with id '${createUserTeamDto.idUser}'.`);
    }

    const team = await this.teamRepository.findOne(createUserTeamDto.idTeam);

    if(!team || team === null) {
      throw new NotFoundException(`Could not find Team with id '${createUserTeamDto.idTeam}'.`);
    }

    const created = this.repository.create(
      createUserTeamDto
    ); 
    const saved = this.repository.save(created);
    return saved;
  }

  async find(teamId?: string): Promise<UserTeam[]> {
    if(!teamId) {
      return this.findAll();
    }

    return this.findByTeam(teamId);
  }

  async findAll(): Promise<UserTeam[]> {
    return await this.repository.find();
  }

  async findOne(userId: string, teamId: string): Promise<UserTeam> {
    const found = await this.repository.findOne({
      idUser: userId,
      idTeam: teamId
    });

    if(!found || found === null) {
      throw new NotFoundException(`Could not find UserTeam with user '${userId}' and Team '${teamId}'.`);
    }

    return found;
  }

  async findByTeam(teamId: string): Promise<UserTeam[]> {   
    console.log(teamId);
    
    const found = await this.repository.find({
      idTeam: teamId
    });

    if(!found || found === null) {
      throw new NotFoundException(`Could not find UserTeam with Team '${teamId}'.`);
    }

    return found;
  }

  async update(userId: string, teamId: string, updateUserTeamDto: UpdateUserTeamDto): Promise<UserTeam> {
    const found = await this.repository.findOne({
      idUser: userId,
      idTeam: teamId
    });

    if(!found || found === null) {
      throw new NotFoundException(`Could not find UserTeam with with user '${userId}' and Team '${teamId}'.`);
    }

    const merge = this.repository.merge(found, updateUserTeamDto);
    return await this.repository.save(merge);
  }

  async remove(userId: string, teamId: string): Promise<string> {
    const found = await this.repository.findOne({
      idUser: userId,
      idTeam: teamId
    });

    if(!found || found === null) {
      throw new NotFoundException(`Could not find UserTeam with user '${userId}' and Team '${teamId}'.`);
    }

    try {
      this.repository.delete(found);
      return `UserTeam with with user '${userId}' and Team '${teamId}' deleted successfully!`;
    } catch (error) {
      throw new Error(`Error deleting UserTeam! \nMessage: ${error}`);
    }
  }

  async enabledSM(userId: string, idTeam: string): Promise<UserTeam> { 
    const userTeam = await this.repository.findOne({
      idUser: userId,
      idTeam: idTeam
    });

    if(!userTeam || userTeam === null) {
      throw new NotFoundException(`Could not find UserTeam with user '${userId}'.`);
    }

    const userTeamArray = await this.repository.find({
      where: {
        idTeam: userTeam.idTeam
      }
    });   

    userTeamArray.forEach(item => {
      item.isScrumMaster = false;
      this.repository.save(item);
    });
 
    const newStatus = {
      isScrumMaster: true
    }

    const mergeUserStatus = getRepository(UserTeam).merge(userTeam, newStatus);
    const team = await this.teamRepository.findOne(userTeam.idTeam);

    if(!team || team === null) {
      throw new NotFoundException(`Could not find Team with id '${userTeam.idTeam}'.`);
    }

    const newStatusActive = {
      isActive: true
    }

    const mergeTeamStatus = getRepository(Team).merge( team, newStatusActive);
 
    await getRepository(Team).save(mergeTeamStatus);
    return await getRepository(UserTeam).save(mergeUserStatus);
  }
 
}
