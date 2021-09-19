import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Project } from '../project/entities/project.entity';
import { Criteria } from '../criteria/entities/criteria.entity';
import { CriteriaProjectService } from './criteria-project.service';
import { CriteriaProject } from './entities/criteria-project.entity';
import { CriteriaProjectController } from './criteria-project.controller';

@Module({
  controllers: [CriteriaProjectController],
  imports: [TypeOrmModule.forFeature([Criteria, Project, CriteriaProject])],
  providers: [CriteriaProjectService]
})
export class CriteriaProjectModule {}
