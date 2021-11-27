import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from 'src/user/entities/user.entity';
import { ProjectUser } from './entities/project-user.entity';
import { Project } from 'src/project/entities/project.entity';
import { CreateProjectUserDto } from './dto/create-project-user.dto';
import { UpdateProjectUserDto } from './dto/update-project-user.dto';

@Injectable()
export class ProjectUserService {

  constructor( 
    @InjectRepository(ProjectUser) 
    private repository: Repository<ProjectUser>,
    @InjectRepository(User) 
    private userRepository: Repository<User>,
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>
  ) {}

  
  async create(createProjectUserDto: CreateProjectUserDto): Promise<ProjectUser>  {
    const user = await this.userRepository.findOne(createProjectUserDto.idUser);

    if(!user || user === null) {
      throw new NotFoundException(`User with id ${createProjectUserDto.idUser} not found.`)
    }

    const project = await this.projectRepository.findOne(createProjectUserDto.idProject);

    if(!project || project === null) {
      throw new NotFoundException(`Project with id ${createProjectUserDto.idProject} not found.`)
    }
    
    const createdProjectUser = this.repository.create(
      createProjectUserDto
    ); 
    const projectUserSaved = this.repository.save(createdProjectUser);
    return projectUserSaved ;
  }

  async findAll(): Promise<ProjectUser[]>  {
    return this.repository.find();
  }

  async find(idUser: string, idProject: string, optional: string, snActivated: string): Promise<ProjectUser>  {
    const projectUser = await this.repository.findOne({
      where: {
        idUser: `${idUser}`,
        idProject: `${idProject}`, 
        optional: `${optional}`, 
        snActivated: `${snActivated}`
      }
    }) 
    if (!projectUser) {
      throw new NotFoundException(`ProjectUsers does not exists for project: ${idProject} and user: ${idUser}.`);
    }
    return projectUser
  }

  async findForProject(idProject: string, optional: string, snActivated: string): Promise<ProjectUser[]>  {
    const projects = await this.repository.find({
      where: {
        idProject: `${idProject}`,
        optional: `${optional}`, 
        snActivated: `${snActivated}`
      }
    }) 
    if (projects.length == 0) {
      throw new NotFoundException(`ProjectUsers does not exists for project: ${idProject}.`);
    }
    return projects
  }

  async findForUser(idUser: string, optional: string, snActivated: string): Promise<ProjectUser[]>  {
    const users = await this.repository.find({
      where: {
        idUser: `${idUser}`,
        optional: `${optional}`,
        snActivated: `${snActivated}`
      }
    }) 
    if (users.length == 0) {
      throw new NotFoundException(`ProjectUsers does not exists for user: ${idUser}.`);
    }
    return users
  }

  async update(idUser: string, idProject: string, dto: UpdateProjectUserDto): Promise<ProjectUser> {
    const projectUser: any = await this.repository.findOne({
      where: {
        idUser: `${idUser}`, 
        idProject: `${idProject}`
      }
    });

    if(!projectUser) {
      throw new NotFoundException(`ProjectUsers does not exists for user '${idUser}' and project '${idProject}'!`);
    }

    const merge = this.repository.merge(projectUser, dto);
    return await this.repository.save(merge);
  }

  async delete(idUser: string, idProject: string) : Promise<string>  {
    const projectUser: any = await this.repository.findOne({
      where: {
        idUser: `${idUser}`, 
        idProject: `${idProject}`
      }
    });

    if(!projectUser) {
      throw new NotFoundException(`ProjectUsers does not exists for user '${idUser}' and project '${idProject}'!`);
    }

    try {
      this.repository.delete(projectUser);
      return `ProjectUser for project ${idProject} and user ${idUser} has been deleted`;
    } catch (error) {
      throw new Error(`Error Deleting ProjectUser! \nMessage: ${error}`);
    }
  }
}
