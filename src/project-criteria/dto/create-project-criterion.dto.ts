import {IsNumber, IsString} from 'class-validator';
export class CreateProjectCriterionDto {
    @IsString()
    desc_criterio: string;

    @IsNumber()
    nota_minima: number;

    @IsNumber()
    nota_maxima: number;

    @IsNumber()
    nota_peso: number;
}
