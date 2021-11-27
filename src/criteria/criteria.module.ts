import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { CriteriaService } from './criteria.service';
import { Criteria } from './entities/criteria.entity';
import { CriteriaController } from './criteria.controller';

@Module({
  controllers: [CriteriaController],
  imports: [TypeOrmModule.forFeature([Criteria])],
  providers: [CriteriaService]
})
export class CriteriaModule {}
