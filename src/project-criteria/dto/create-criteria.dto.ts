import {
     IsString, IsUUID} from 'class-validator';
export class CreateCriteriaDto {
 
    @IsUUID()
    idCriteria: string;

    @IsString()
    descCriteria: string;

    @IsString()
    snAtivo: string;
}
