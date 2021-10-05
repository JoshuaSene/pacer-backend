import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProjectUserDto {

    @IsString()
    @ApiProperty()
    idProject: string;

    @IsString()
    @ApiProperty()
    idUser: string;

    @ApiProperty()
    optional: boolean;

    @IsString()
    @MaxLength(1)
    @ApiProperty()
    snActivated: string;

}
