import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/role/entities/role.entity';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(createuserDto: CreateUserDto): Promise<User> {
    createuserDto.validate(); 
    
    if(createuserDto.role.toUpperCase() != 'USER'){
      createuserDto.status = "pending"
    }
    const createdUser = this.repository.create(createuserDto);
    
    var selectUserRole = await getRepository(Role).findOne({
      roleName: createuserDto.role,
    });

    if (!selectUserRole) {
      throw new NotFoundException(`${createuserDto.role} role does not exist`);
    }

 
    const userSaved: User = await this.repository.save(createdUser);

    const addRole = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(UserRole)
      .values({
        idUser: () => `('${userSaved.idUser}')`,
        idRole: () => `('${selectUserRole.idRole}')`,
      })
      .execute();
    if (!addRole) {
      throw new NotFoundException(`Failed to register role`);
    }

    return userSaved;
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOne(id);
    const merge = this.repository.merge(user, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string> {
    const user = await this.repository.findOne(id);
    this.repository.delete(user.idUser);
    return `User ${id} has been deleted`;
  }
}
