import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { CriteriaController } from './criteria.controller';
import { CriteriaService } from './criteria.service';
import { Criteria } from './entities/criteria.entity';

@Module({
  controllers: [CriteriaController],
  imports: [TypeOrmModule.forFeature([Criteria])],
  providers: [CriteriaService]
})
export class CriteriaModule {}
