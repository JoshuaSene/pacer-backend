import { Module } from '@nestjs/common';
import { ProjectUserService } from './project-user.service';
import { ProjectUserController } from './project-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectUser } from './entities/project-user.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [ProjectUserController],
  imports: [TypeOrmModule.forFeature([User, Project, ProjectUser])],
  providers: [ProjectUserService]
})
export class ProjectUserModule {}
