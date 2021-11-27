import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';

import { UserTeamService } from './user-team.service';
import { UserTeam } from './entities/user-team.entity';
import { UpdateUserTeamDto } from './dto/update-user-team.dto';
import { CreateUserTeamDto } from './dto/create-user-team.dto';

@Controller('user-team')
export class UserTeamController {
  
  constructor(private readonly userTeamService: UserTeamService) {}

  @Post()
  create(@Body() createUserTeamDto: CreateUserTeamDto): Promise<UserTeam> {
    return this.userTeamService.create(createUserTeamDto);
  }
 
  @Post('enable-sm/:userId')
  enabledSM(
    @Param('userId') userId: string, 
    @Body('idTeam') idTeam: string,
    ):Promise<UserTeam>  {
      return this.userTeamService.enabledSM(userId, idTeam);
  }

  @Get()
  findAll(@Query('idTeam') idTeam?: string): Promise<UserTeam[]> {
    return this.userTeamService.find(idTeam);
  }

  @Get()
  findOne(
    @Query('idUser') idUser: string,
    @Query('idTeam') idTeam: string): Promise<UserTeam> {
    return this.userTeamService.findOne(idUser, idTeam);
  }

  @Get('by-team/:idTeam')
  findByTeam(
    @Param('idTeam') idTeam: string): Promise<UserTeam[]> {
    return this.userTeamService.findByTeam(idTeam);
  }

  @Patch()
  update(
    @Query('idUser') idUser: string,
    @Query('idTeam') idTeam: string, 
    @Body() updateUserTeamDto: UpdateUserTeamDto): Promise<UserTeam> {
    return this.userTeamService.update(idUser, idTeam, updateUserTeamDto);
  }

  @Delete()
  remove(
    @Query('idUser') idUser: string,
    @Query('idTeam') idTeam: string
    ) {
    return this.userTeamService.remove(idUser, idTeam);
  }
}
