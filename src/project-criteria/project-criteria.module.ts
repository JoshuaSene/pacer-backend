import { Module } from '@nestjs/common';
import { ProjectCriteriaService } from './project-criteria.service';
import { ProjectCriteriaController } from './project-criteria.controller';

@Module({
  controllers: [ProjectCriteriaController],
  providers: [ProjectCriteriaService]
})
export class ProjectCriteriaModule {}
