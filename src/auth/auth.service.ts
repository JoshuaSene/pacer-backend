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

  async login(user) {
    const payload = { sub: user.id, login: user.login };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(login: string, password: string) {
    let user: User = null

    try {
      if(user == null) {
        user = await this.userService.findByEmail(login);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      if(user == null) {
        user = await this.userService.findByDocument(login);
      }
    } catch (error) {
      console.log(error);
    }

    try {
      if(user == null) {
        user = await this.userService.findByLogin(login);
      }
    } catch (error) {
      console.log(error);
    }

    if(user == null) return user

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }
}