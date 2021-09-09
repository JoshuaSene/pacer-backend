import {IsString, IsUUID} from 'class-validator';
export class CreateCriteriaDto {
 
    @IsString()
    descCriteria: string;

    @IsString()
    snAtivo: string;
}
