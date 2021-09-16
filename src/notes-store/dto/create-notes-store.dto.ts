import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateNotesStoreDto {


    @IsString()
    @ApiProperty()
    idAvaliador: string;

    @IsString()
    @ApiProperty()
    idAvaliado: string;

    @IsNumber()
    @ApiProperty()
    nota: number;

    @IsString()
    @ApiProperty()
    observacao: string;
}
