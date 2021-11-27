import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common'; 

import { CriteriaService } from './criteria.service';
import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaDto } from './dto/create-criteria.dto';
import { UpdateCriterionDto } from './dto/update-criteria.dto';

@Controller('criteria')
export class CriteriaController {
  
  constructor(private readonly projectCriteriaService: CriteriaService) {}

  @Post()
  create(@Body() createCriteriaDto: CreateCriteriaDto): Promise<Criteria> {
    return this.projectCriteriaService.create(createCriteriaDto);
  }

  @Get()
  findAll(): Promise<Criteria[]>  { 
    return this.projectCriteriaService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string, 
    ): Promise<Criteria[]>  {
    const criteria = this.projectCriteriaService.find(id);
    return criteria;
  }
  
  @Get('desc/:desc')
  findByDesc(
    @Param('desc') desc: string, 
    ): Promise<Criteria>  {
      return this.projectCriteriaService.findByDesc(desc);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectCriterionDto: UpdateCriterionDto
    ):Promise<Criteria>  {
      return this.projectCriteriaService.update(id, updateProjectCriterionDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string):Promise<String>  {
    return this.projectCriteriaService.delete(id);
  }
}