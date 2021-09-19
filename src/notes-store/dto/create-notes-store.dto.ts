import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateNotesStoreDto {


    @IsString()
    @ApiProperty()
    idEvaluator: string;

    @IsString()
    @ApiProperty()
    idEvaluated: string;

    @IsString()
    @ApiProperty()
    idGroup: string;

    @IsString()
    @ApiProperty()
    idCriteria: string;

    @IsString()
    @ApiProperty()
    idSprint: string;

    @IsNumber()
    @ApiProperty()
    note: number;

    @IsString()
    @ApiProperty()
    obs: string;
}
