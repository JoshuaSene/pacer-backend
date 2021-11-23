import { Controller, Get, Post, Body, Patch, Delete, Query, BadRequestException, Param } from '@nestjs/common';
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

  /**
   * Lista de critérios de um projeto
   * @returns list
   */
  @Get(':idProject')
  findByProject(
    @Param('idProject') idProject: string, 
  ): Promise<CriteriaProject[]> {
    return this.criteriaProjectService.findByProject(idProject);
  }

  @Get()
  findAll(): Promise<CriteriaProject[]> {
    return this.criteriaProjectService.findAll();
  }

  @Get()
  findOne(
    @Query('idpro') idProject: string,
    @Query('idcri') idCriteria: string,
  ): Promise<CriteriaProject> {
    console.log("PROJETO " + idProject);
    console.log("CRITERIO " + idCriteria);
    return this.criteriaProjectService.find(idProject,idCriteria);
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
      return this.criteriaProjectService.findByProject(idProject);
    }
    
    if(Helper.isEmpty(idProject)) {
      return this.criteriaProjectService.findForCriteria(idCriteria, snActivated);
    }

    throw new BadRequestException('You must provide idCriteria or idProject, not both.');
  }

  @Patch()
  update(
    @Body() dto: UpdateCriteriaProjectDto) {
    return this.criteriaProjectService.update(dto);
  }

  @Delete()
  remove(
    @Query('project') idProject: string,
    @Query('criteria') idCriteria: string,
  ) {
    return this.criteriaProjectService.delete( idProject , idCriteria );
  }
}
