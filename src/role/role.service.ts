import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role) 
    private repository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole: Role = this.repository.create(
      createRoleDto
    ); 
    return await this.repository.save(createdRole);
  }

  async findAll(): Promise<Role[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Role> {
    return await this.repository.findOne(id);
  }

  async update(id: string, dto: UpdateRoleDto): Promise<Role> {
    const role = await this.repository.findOne(id);
    const merge = this.repository.merge(role, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string>  {
    const role = await this.repository.findOne(id);
    this.repository.delete(role.idRole);
    return `Project ${id} has been deleted`;
  }
}
