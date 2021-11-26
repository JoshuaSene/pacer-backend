import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRole } from './entities/user-role.entity';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Injectable()
export class UserRoleService {

  constructor(
    @InjectRepository(UserRole) 
    private repository: Repository<UserRole>
  ) {}

  async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    const createdUserRole: UserRole = this.repository.create(
      createUserRoleDto
    ); 
    return await this.repository.save(createdUserRole);
  }

  async findAll(): Promise<UserRole[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<UserRole> {
    const userRole = await this.repository.findOne(id);

    if (!userRole) {
      throw new NotFoundException(`Could not find UserRole with id ${id}`);
    }

    return userRole;
  }

  async update(id: string, dto: UpdateUserRoleDto): Promise<UserRole> {
    const userRole = await this.repository.findOne(id);

    if (!userRole) {
      throw new NotFoundException(`Could not find UserRole with id ${id}`);
    }

    const merge = this.repository.merge(userRole, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string>  {
    const userRole = await this.repository.findOne(id);

    if (!userRole) {
      throw new NotFoundException(`Could not find UserRole with id ${id}`);
    }

    try {
      this.repository.delete(userRole.idUserRole);
      return `UserRole ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error deleting UserRole! \nMessage: ${error}`);
    }
  }
}
