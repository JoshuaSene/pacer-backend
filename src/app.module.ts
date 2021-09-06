import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectCriteriaModule } from './project-criteria/project-criteria.module';

@Module({
  imports: [ProjectCriteriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
