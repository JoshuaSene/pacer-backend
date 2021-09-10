import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectCriteriaModule } from './project-criteria/project-criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';
import { ProjectModule } from './project/project.module';


@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      keepConnectionAlive: true
    }), 
    ProjectCriteriaModule, CriteriaProjectModule, ProjectModule
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
