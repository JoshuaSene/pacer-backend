import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateCriteriaProjectDto {

    @IsString()
    idCriteria: string;

    @IsString()
    idProject: string;

    @IsNumber()
    minGrade: number;

    @IsNumber()
    maxGrade: number;

    @IsNumber()
    gradeWeight : number;

    @IsString()
    @MaxLength(1)
    snActivated: string;
}
