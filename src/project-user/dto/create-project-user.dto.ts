import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateProjectUserDto {

    @IsString()
    @ApiProperty()
    idProject: string;

    @IsString()
    @ApiProperty()
    idUser: string;

    @IsString()
    @ApiProperty()
    optional: string;

    @IsString()
    @MaxLength(1)
    @ApiProperty()
    snActivated: string;

}
