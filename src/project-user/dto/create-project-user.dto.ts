import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateProjectUserDto {

    @IsString()
    @ApiProperty()
    idProject: string;

    @IsString()
    @ApiProperty()
    idUser: string;

    @IsBoolean()
    @ApiProperty()
    optional: Boolean;

    @IsString()
    @MaxLength(1)
    @ApiProperty()
    snActivated: string;

}
