import { login1635545920323 } from './../database/migrations/1635545920323-login';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { getConnection, getRepository, Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { Role } from 'src/role/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ROLES_ENUM } from './../role/enums/role.enum';
import { UserApprovalDto } from './dto/user-approval-dto';
import { UserRole } from 'src/user-role/entities/user-role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async create(createuserDto: CreateUserDto): Promise<User> {    
    if(createuserDto.role.toUpperCase() != ROLES_ENUM.USER) {
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
  
  async approve(approvals: UserApprovalDto[]) {
    approvals.forEach(async approval => {
      const element = {
        "status": approval.approved ? 'enabled' : 'disabled'
      }

      const user = await this.repository.findOne(approval.id);

      if (!user) {
        throw new NotFoundException(`Could not find user with id ${approval.id}`);
      }

      const merge = this.repository.merge(user, element);
      this.repository.save(merge);
    });
  }

  async wipeData(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if(!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    user.document = ""
    user.email = ""
    return this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if(!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email: `${email}`
      }
    });
    if (!user) {
      throw new NotFoundException(`Could not find user with email ${email}`);
    }
    return user;
  }

  async findByDocument(document: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        document: `${document}`
      }
    });
    if (!user) {
      throw new NotFoundException(`Could not find user with document ${document}`);
    }
    return user;
  }

  async findByLogin(login: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        login: `${login}`
      }
    });
    if (!user) {
      throw new NotFoundException(`Could not find user with login ${login}`);
    }
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    const merge = this.repository.merge(user, dto);
    return await this.repository.save(merge);
  }

  async remove(id: string): Promise<string> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    try {
      this.repository.delete(user.idUser);
      return `User ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error deleting User! \nMessage: ${error}`);
    }
  }
}
