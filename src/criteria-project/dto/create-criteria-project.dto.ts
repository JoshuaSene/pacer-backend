import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCriteriaProjectDto {

    @IsString()
    @ApiProperty()
    idCriteria: string;

    @IsString()
    @ApiProperty()
    idProject: string;

    @IsNumber()
    @ApiProperty()
    minGrade: number;

    @IsNumber()
    @ApiProperty()
    maxGrade: number;

    @IsNumber()
    @ApiProperty()
    gradeWeight : number;

    @IsString()
    @MaxLength(1)
    @ApiProperty()
    snActivated: string;
}
