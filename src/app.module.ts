import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectCriteriaModule } from './project-criteria/project-criteria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesStoreModule } from './notes-store/notes-store.module';


@Module({
  
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities: true,
  }), ProjectCriteriaModule, NotesStoreModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
