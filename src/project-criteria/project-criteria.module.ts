import { Module } from '@nestjs/common';
import { ProjectCriteriaService } from './project-criteria.service';
import { ProjectCriteriaController } from './project-criteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectCriterion } from './entities/project-criterion.entity';

@Module({
  controllers: [ProjectCriteriaController],
  imports: [TypeOrmModule.forFeature([ProjectCriterion])],
  providers: [ProjectCriteriaService]
})
export class ProjectCriteriaModule {}
