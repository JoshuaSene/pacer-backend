import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Injectable, NotFoundException } from '@nestjs/common';

import { Role } from './entities/role.entity';
import { ROLES_ENUM } from './enums/role.enum';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role) 
    private repository: Repository<Role>
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole: Role = this.repository.create(
      createRoleDto
    ); 
    return await this.repository.save(createdRole);
  }

  async findAll(): Promise<Role[]> {
    try {
      await this.minimumData();
    } catch (error) {
      console.log(error);
    }
    return this.repository.find();
  }

  async findOne(id: string): Promise<Role> {
    const role = await this.repository.findOne(id);

    if(!role) {
      throw new NotFoundException(`Role with id '${id}' was not found.`);
    }

    return role;
  }

  async update(id: string, dto: UpdateRoleDto): Promise<Role> {
    const role = await this.repository.findOne(id);

    if(!role) {
      throw new NotFoundException(`Role with id '${id}' was not found.`);
    }

    const merge = this.repository.merge(role, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string> {
    const role = await this.repository.findOne(id);

    if(!role) {
      throw new NotFoundException(`Role with id '${id}' was not found.`);
    }
    
    try {
      this.repository.delete(role);
      return `Role ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error Deleting Role! \nMessage: ${error}`);
    }
  }

  async minimumData(): Promise<string> {
    const roles = await this.repository.find();
    if (roles.length === 0){
      try {
        await this.create( { "roleName": ROLES_ENUM.ADMIN} );  
        await this.create( { "roleName": ROLES_ENUM.USER} );  
        await this.create( { "roleName": ROLES_ENUM.TEACHER} );  
      } catch (error) {
        console.log(error);
      }
      const msg = "Minimal Data of Role was added.";
      console.log(msg);
      return msg;
    }
  }
}
