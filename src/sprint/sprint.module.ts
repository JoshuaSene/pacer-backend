import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { SprintService } from './sprint.service';
import { Sprint } from './entities/sprint.entity';
import { SprintController } from './sprint.controller';
import { Project } from './../project/entities/project.entity';
import { UserTeam } from './../user-team/entities/user-team.entity';
import { NotesStore } from './../notes-store/entities/notes-store.entity';
import { CriteriaProject } from './../criteria-project/entities/criteria-project.entity';

@Module({
  controllers: [SprintController],
  imports: [TypeOrmModule.forFeature([
    CriteriaProject, 
    NotesStore, 
    Project,
    Sprint, 
    UserTeam
  ])],
  providers: [SprintService]
})
export class SprintModule {}