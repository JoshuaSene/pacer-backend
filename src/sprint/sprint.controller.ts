import { 
  Controller, 
  Get, 
  Post, 
  Body,
  Param, 
  Delete, 
  Put 
} from '@nestjs/common'; 

import { SprintService } from './sprint.service';
import { Sprint } from './entities/sprint.entity';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';

@Controller('sprint')
export class SprintController {
  constructor(private readonly sprintService: SprintService) {}

  @Post()
  create(@Body() CreateSprintDto: CreateSprintDto): Promise<Sprint> {
    return this.sprintService.create(CreateSprintDto);
  }

  @Get()
  findAll(): Promise<Sprint[]> { 
    return this.sprintService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<Sprint> {
    const sprint = this.sprintService.find(id);
    return sprint;
  }
  
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateSprintDto: UpdateSprintDto
    ):Promise<Sprint> {
      return this.sprintService.update(id, UpdateSprintDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string):Promise<String> {
    return this.sprintService.delete(id);
  }
}
