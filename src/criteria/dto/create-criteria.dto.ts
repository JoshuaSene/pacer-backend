import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateCriteriaDto { 

    @IsString()
    @ApiProperty()
    descCriteria: string;

    @IsString()
    @ApiProperty()
    snAtivo: string;
}
