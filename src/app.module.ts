import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';
import { RoleModule } from './role/role.module';
import { SprintModule } from './sprint/sprint.module';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserTeamModule } from './user-team/user-team.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { NotesStoreModule } from './notes-store/notes-store.module';
import { ProjectUserModule } from './project-user/project-user.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';

@Module({  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fatec',
      database: 'pacer',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false
    }), 
    AuthModule,
    CriteriaModule, 
    CriteriaProjectModule, 
    ProjectModule, 
    ProjectUserModule,
    NotesStoreModule, 
    SprintModule, 
    TeamModule,
    UserModule,
    RoleModule,
    ScheduleModule.forRoot(),
    SchedulerModule,
    UserRoleModule,
    UserTeamModule
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
