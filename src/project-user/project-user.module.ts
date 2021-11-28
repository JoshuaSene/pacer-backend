import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/user/entities/user.entity';
import { ProjectUserService } from './project-user.service';
import { ProjectUser } from './entities/project-user.entity';
import { Project } from 'src/project/entities/project.entity';
import { ProjectUserController } from './project-user.controller';

@Module({
  controllers: [ProjectUserController],
  imports: [TypeOrmModule.forFeature([User, Project, ProjectUser])],
  providers: [ProjectUserService]
})
export class ProjectUserModule {}
