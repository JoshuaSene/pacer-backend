import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProjectDto {

    //Add User id 
  
    @IsString()
    @ApiProperty()
    description: string;

    @IsString()
    @ApiProperty()
    openingDate: string;

    @IsString()
    @ApiProperty()
    closeDate: string;
}
