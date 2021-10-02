import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

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

    @Optional()
    @ApiProperty()
    note: number;

    @IsString()
    @ApiProperty()
    obs: string;
}
