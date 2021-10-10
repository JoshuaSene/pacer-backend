import { Controller, Get, Post, Body,Param, Delete, Query, Put } from '@nestjs/common'; 

import { TeamService } from './team.service';
import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(): Promise<Team[]>  { 
    return this.teamService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string
    ): Promise<Team>  {
    const team = this.teamService.find(id);
    return team;
  }
  
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto
    ):Promise<Team>  {
      return this.teamService.update(id, updateTeamDto);
  }  

  @Delete(':id')
  remove(@Param('id') id: string):Promise<String>  {
    return this.teamService.delete(id);
  }
}
