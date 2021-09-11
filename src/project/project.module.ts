import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectService]
})
export class ProjectModule {}
