import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesStoreModule } from './notes-store/notes-store.module';
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';
import { CriteriaModule } from './criteria/criteria.module';
import { CriteriaProjectModule } from './criteria-project/criteria-project.module';
import { SprintModule } from './sprint/sprint.module';
import { TeamModule } from './team/team.module';
import { ProjectUserModule } from './project-user/project-user.module';
import { RoleModule } from './role/role.module';
import { UserRoleModule } from './user-role/user-role.module';
import { UserTeamModule } from './user-team/user-team.module';

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
    CriteriaModule, 
    CriteriaProjectModule, 
    ProjectModule, 
    NotesStoreModule, 
    SprintModule, 
    TeamModule,
    UserModule,
    RoleModule,
    UserRoleModule,
    UserTeamModule
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
