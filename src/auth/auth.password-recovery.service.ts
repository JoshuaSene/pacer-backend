import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { RecoveryPasswordDto } from './dto/recovery.dto';
import * as nodemailer from 'nodemailer';
import { env } from 'process';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async update(dto: RecoveryPasswordDto): Promise<String> { 
    const user: User = await this.repository.findOne({
      login: `${dto.login}`,
      email: `${dto.email}`,
      document: `${dto.document}`
    }); 

    if (!user) {
      throw new NotFoundException(`User does not exists`);
    }

    const newPassword = (Math.random() + 1).toString(36).substring(4);
    console.log(newPassword)

    const objPassword = {
      password: newPassword,
    };

    const merge = this.repository.merge(user, objPassword);
    await this.repository.save(merge)
 
const transporter = nodemailer.createTransport({
    host: env.SMTP_SERVER,
    port: 465,
    secure: true,
    auth: {
      user: env.SMTP_USERNAME,
      pass: env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  }); 

  const mailOptions = {
    from: 'deaav@setytecnologia.com.br',
    to: `${dto.email}`,
    subject: 'E-mail de redefinicao de senha',
    text: `Segue abaixo a nova senha para login no Pacer.
     ${newPassword}
  `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.messageId);
    }
  });
    return 'The Password has been sent on email';
  }
}
