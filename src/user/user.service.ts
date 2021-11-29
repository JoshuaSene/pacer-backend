import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { Role } from '../role/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ROLES_ENUM } from './../role/enums/role.enum';
import { UserApprovalDto } from './dto/user-approval-dto';
import { UserRole } from '../user-role/entities/user-role.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async create(createuserDto: CreateUserDto): Promise<User> {    
    if (createuserDto.role.replace(" ","").length===0){
      throw new ConflictException("Nível de usuário não informado!")
    }

    if (createuserDto.login.replace(" ","").length===0){
      throw new ConflictException("Usuário não informado!")
    }
    
    if (createuserDto.name.replace(" ","").length===0){
      throw new ConflictException("Nome não informado!")
    }

    if (createuserDto.document.replace(" ","").length===0 && 
        createuserDto.role === 'USR'){
      throw new ConflictException("RA não informado!")
    } else {
      createuserDto.document = createuserDto.document.length === 0 
        ? null 
        : createuserDto.document
    }

    if (createuserDto.email.replace(" ","").length===0){
      throw new ConflictException("E-mail não informada!")
    }

    if (createuserDto.password.replace(" ","").length===0){
      throw new ConflictException("Senha não informada!")
    }

    if (createuserDto.role.toUpperCase() != ROLES_ENUM.USER) {
      createuserDto.status = 'pending';
    }
    const createdUser = this.repository.create(createuserDto);
    var selectUserRole = await getRepository(Role).findOne({
      roleName: createuserDto.role,
    });

    if (!selectUserRole) {
      throw new NotFoundException(
        `Nível de usuário inexistente: ${createuserDto.role}`,
      );
    }

    const userSaved: User = await this.repository.save(createdUser);

    try {
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
        throw new NotFoundException(`Falha no registro do nível do usuário`);
      }
    } catch (error) {
      throw new NotFoundException(error);
    }

    return userSaved;
  }

  async approve(approvals: UserApprovalDto[]) {
    approvals.forEach(async (approval) => {
      const element = {
        status: approval.approved ? 'enabled' : 'disabled',
      };

      const user = await this.repository.findOne(approval.id);

      if (!user) {
        throw new NotFoundException(
          `Could not find user with id ${approval.id}`,
        );
      }

      const merge = this.repository.merge(user, element);
      this.repository.save(merge);
    });
  }

  async wipeData(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    user.document = null
    return this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException(`Could not find user with id ${id}`);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    let user: any;
    try {
      user = await this.repository.findOne({
        where: {
          email: `${email}`,
        },
      });
      if (!user) {
        throw new NotFoundException(
          `Usuário não localizado pelo e-mail ${email}`,
        );
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
    return user;
  }

  async findByDocument(document: string): Promise<User> {
    let user: any;
    try {
      user = await this.repository.findOne({
        where: {
          document: `${document}`,
        },
      });
      if (!user) {
        throw new NotFoundException(
          `Usuário não localizado pelo documento ${document}`,
        );
      }
    } catch (error) {
      throw new NotFoundException(error);
    }
    return user;
  }

  async findByLogin(login: string): Promise<User> {
    let user: any;
    try {
      user = await this.repository.findOne({
        where: {
          login: `${login}`,
        },
      });
      if (!user) {
        throw new NotFoundException(`Usuário não localizado pelo login ${login}`);
      }
    } catch (error) {
      throw new NotFoundException(error);
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

    let userRole = await getRepository(UserRole).findOne({
      where: {
        idUser: user.idUser
      }
    });
    
    try {
      getRepository(UserRole).delete(userRole.idUserRole);
      this.repository.delete(user.idUser);
      return `User ${id} has been deleted`;
    } catch (error) {
      throw new Error(`Error deleting User! \nMessage: ${error}`);
    }
  }
}
