import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';
import { Sprint } from './entities/sprint.entity';

@Module({
  controllers: [SprintController],
  imports: [TypeOrmModule.forFeature([Sprint])],
  providers: [SprintService]
})
export class SprintModule {}
