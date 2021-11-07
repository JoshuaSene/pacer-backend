import { Controller, Get, Post, Body,Param, Delete, Query, Put } from '@nestjs/common'; 
import { Criteria } from './entities/criteria.entity';
import { CreateCriteriaDto } from './dto/create-criteria.dto';
import { UpdateCriterionDto } from './dto/update-criteria.dto';
import { CriteriaService } from './criteria.service';

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
    @Query('snAtivo') snAtivo: string 
    ): Promise<Criteria[]>  {
    const criteria = this.projectCriteriaService.find(id, snAtivo);
    return criteria;
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
