import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectCriteriaModule } from './project-criteria/project-criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(), ProjectCriteriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
