import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class RecoveryPasswordDto {
  
  @ApiProperty()
  @IsString()
  login: string;

  @ApiProperty()
  @IsString()
  document: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}