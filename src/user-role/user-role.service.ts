import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleService {

  constructor(
    @InjectRepository(UserRole) 
    private repository: Repository<UserRole>,
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
    return await this.repository.findOne(id);
  }

  async update(id: string, dto: UpdateUserRoleDto): Promise<UserRole> {
    const userRole = await this.repository.findOne(id);
    const merge = this.repository.merge(userRole, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string>  {
    const userRole = await this.repository.findOne(id);
    this.repository.delete(userRole.idUserRole);
    return `Project ${id} has been deleted`;
  }
}
