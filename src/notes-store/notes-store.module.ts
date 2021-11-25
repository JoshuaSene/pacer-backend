import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NotesStoreService } from './notes-store.service';
import { NotesStore } from './entities/notes-store.entity';
import { Sprint } from './../sprint/entities/sprint.entity';
import { Project } from 'src/project/entities/project.entity';
import { NotesStoreController } from './notes-store.controller';
import { UserTeam } from './../user-team/entities/user-team.entity';
import { ProjectUser } from './../project-user/entities/project-user.entity';
import { CriteriaProject } from './../criteria-project/entities/criteria-project.entity';


@Module({
  controllers: [NotesStoreController],
  imports: [TypeOrmModule.forFeature([
    NotesStore,
    Sprint,
    UserTeam,
    CriteriaProject,
    Project,
    ProjectUser
  ])],
  providers: [NotesStoreService],
  exports: [NotesStoreService]
})
export class NotesStoreModule {}
