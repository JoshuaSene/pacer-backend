import { Controller, Get, Post, Body, Patch, Param, Delete, Query, BadRequestException } from '@nestjs/common';
import { ProjectUserService } from './project-user.service';
import { CreateProjectUserDto } from './dto/create-project-user.dto';
import { UpdateProjectUserDto } from './dto/update-project-user.dto';
import { ProjectUser } from './entities/project-user.entity';
import { Helper } from 'src/commons/helper';

@Controller('project-user')
export class ProjectUserController {
  constructor(private readonly projectUserService: ProjectUserService) {}

  @Post()
  create(@Body() createProjectUserDto: CreateProjectUserDto) {
    return this.projectUserService.create(createProjectUserDto);
  }

  @Get()
  findAll() : Promise<ProjectUser[]>{
    return this.projectUserService.findAll();
  }

  @Get()
  findOne(
    @Query('idUser') idUser: string,
    @Query('idProject') idProject: string,
    @Query('optional') optional: string,
    @Query('snActivated') snActivated: string
  ): Promise<ProjectUser> {
    return this.projectUserService.find(idUser, idProject, optional, snActivated);
  }

  @Get('find-many')
  findMany(
    @Query('snActivated') snActivated: string,
    @Query('idUser') idUser?: string,
    @Query('optional') optional?: string,
    @Query('idProject') idProject?: string
  ): Promise<ProjectUser[]> {
    if(Helper.isEmpty(idUser) && Helper.isEmpty(idProject)) {
      throw new BadRequestException('Neither idUser or idProject where provided. At least one of them must be provided.');
    }

    if(Helper.isEmpty(idUser)) {
      return this.projectUserService.findForUser(idUser, optional, snActivated);
    }
    
    if(Helper.isEmpty(idProject)) {
      return this.projectUserService.findForProject(idProject, optional, snActivated);
    }

    throw new BadRequestException('You must provide idUser or idProject, not both.');
  }

  @Patch()
  update(
    @Query('idUser') idUser: string,
    @Query('idProject') idProject: string, 
    @Body() dto: UpdateProjectUserDto) {
    return this.projectUserService.update(idUser, idProject, dto);
  }

  @Delete()
  remove(
    @Query('idUser') idUser: string,
    @Query('idProject') idProject: string,
  ) {
    return this.projectUserService.delete(idUser, idProject);
  }
}
