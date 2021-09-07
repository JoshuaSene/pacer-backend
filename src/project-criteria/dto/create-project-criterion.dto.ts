import {IsNumber, IsString, IsUUID, MinLength} from 'class-validator';
export class CreateProjectCriterionDto {
 
    @IsUUID()
    id_projeto: string;

    @IsString()
    desc_criterio: string;

    @IsNumber()
    nota_minima: number;

    @IsNumber()
    nota_maxima: number;

    @IsNumber()
    nota_peso: number;

    @IsString()
    sn_ativo: string;
}
