import { Module } from '@nestjs/common';
import { CriteriaProjectService } from './criteria-project.service';
import { CriteriaProjectController } from './criteria-project.controller';

@Module({
  controllers: [CriteriaProjectController],
  providers: [CriteriaProjectService]
})
export class CriteriaProjectModule {}
