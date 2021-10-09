import { Helper } from './../../commons/helper';
import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsString } from "class-validator";

export class CreateUserDto {
  
    @IsString()
    @ApiProperty()
    login: string;

    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
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

    @Optional()
    @ApiProperty()
    snAtivo: string;

    public validate() {
        this.snAtivo = Helper.isEmpty(this.snAtivo) ? 'N' : this.snAtivo;
    }
}