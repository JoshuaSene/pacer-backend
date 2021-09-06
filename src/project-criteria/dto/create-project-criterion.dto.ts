import {IsNumber, IsString, MinLength} from 'class-validator';
export class CreateProjectCriterionDto {
   
    @IsNumber()
    id_criterio: number;

    @IsNumber()
    id_projeto: number;

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
