import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CriteriaProjectService } from './criteria-project.service';
import { CreateCriteriaProjectDto } from './dto/create-criteria-project.dto';
import { UpdateCriteriaProjectDto } from './dto/update-criteria-project.dto';

@Controller('criteria-project')
export class CriteriaProjectController {
  constructor(private readonly criteriaProjectService: CriteriaProjectService) {}

  @Post()
  create(@Body() createCriteriaProjectDto: CreateCriteriaProjectDto) {
    return this.criteriaProjectService.create(createCriteriaProjectDto);
  }

  @Get()
  findAll() {
    return this.criteriaProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.criteriaProjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCriteriaProjectDto: UpdateCriteriaProjectDto) {
    return this.criteriaProjectService.update(+id, updateCriteriaProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.criteriaProjectService.remove(+id);
  }
}
