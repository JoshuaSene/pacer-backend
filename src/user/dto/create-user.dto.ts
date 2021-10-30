import { Helper } from './../../commons/helper';
import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString, Matches } from "class-validator";

const docRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

export class CreateUserDto {
  
    @IsString()
    @ApiProperty()
    login: string;

    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
    @Matches(docRegex, {
        message: 'Formato inválido'
    })
    document: string;

    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    role: string;

    @ApiProperty()
    @IsEmpty()
    status: string;

    @IsString()
    @ApiProperty()
    password: string;

    @Optional()
    @ApiProperty()
    snAtivo: string;
}