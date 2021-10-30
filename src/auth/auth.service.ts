import { LoginDto } from './dto/login.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { User } from 'src/user/entities/user.entity';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {   
    let user: User = await this.findUser(loginDto.login);   
    
    const payload = { 
      sub: user.idUser, 
      login: user.login, 
      name: user.name 
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(login: string, password: string) {
    let user: User = await this.findUser(login);

    if(user == null) return user;
    
    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  private async findUser(login: string): Promise<User> {
    let user: User;

    try {
      if(!user) {
        user = await this.userService.findByEmail(login);
      }
    } catch (error) {
      console.log(error.message);
    }

    try {
      if(!user) {
        user = await this.userService.findByDocument(login.replace(/\D/g,''));
      }
    } catch (error) {
      console.log(error.message);
    }

    try {
      if(!user) {
        user = await this.userService.findByLogin(login);
      }
    } catch (error) {
      console.log(error.message);
    }

    return user
  }
}