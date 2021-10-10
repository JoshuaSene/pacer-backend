import { Controller, Get, Post, Body, Patch, Delete, Query, BadRequestException } from '@nestjs/common';
import { CriteriaProjectService } from './criteria-project.service';
import { CreateCriteriaProjectDto } from './dto/create-criteria-project.dto';
import { UpdateCriteriaProjectDto } from './dto/update-criteria-project.dto';
import { CriteriaProject } from './entities/criteria-project.entity';
import { Helper } from '../commons/helper';

@Controller('criteria-project')
export class CriteriaProjectController {
  constructor(private readonly criteriaProjectService: CriteriaProjectService) {}

  @Post()
  create(@Body() createCriteriaProjectDto: CreateCriteriaProjectDto) {
    return this.criteriaProjectService.create(createCriteriaProjectDto);
  }

  @Get()
  findAll(): Promise<CriteriaProject[]> {
    return this.criteriaProjectService.findAll();
  }

  @Get()
  findOne(
    @Query('idCriteria') idCriteria: string,
    @Query('idProject') idProject: string,
    @Query('snActivated') snActivated: string
  ): Promise<CriteriaProject> {
    return this.criteriaProjectService.find(idCriteria, idProject, snActivated);
  }

  @Get('find-many')
  findMany(
    @Query('snActivated') snActivated: string,
    @Query('idCriteria') idCriteria?: string,
    @Query('idProject') idProject?: string
  ): Promise<CriteriaProject[]> {
    if(Helper.isEmpty(idCriteria) && Helper.isEmpty(idProject)) {
      throw new BadRequestException('Neither idCriteria or idProject where provided. At least one of them must be provided.');
    }

    if(Helper.isEmpty(idCriteria)) {
      return this.criteriaProjectService.findForProject(idProject, snActivated);
    }
    
    if(Helper.isEmpty(idProject)) {
      return this.criteriaProjectService.findForCriteria(idCriteria, snActivated);
    }

    throw new BadRequestException('You must provide idCriteria or idProject, not both.');
  }

  @Patch()
  update(
    @Query('idCriteria') idCriteria: string,
    @Query('idProject') idProject: string, 
    @Body() dto: UpdateCriteriaProjectDto) {
    return this.criteriaProjectService.update(idCriteria, idProject, dto);
  }

  @Delete()
  remove(
    @Query('idCriteria') idCriteria: string,
    @Query('idProject') idProject: string,
  ) {
    return this.criteriaProjectService.delete(idCriteria, idProject);
  }
}
