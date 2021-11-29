import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCriteriaDto { 

    @IsString()
    @ApiProperty()
    descCriteria: string;

    @IsString()
    @ApiProperty()
    snAtivo: string;

    @IsString()
    @ApiProperty()
    obs: string;
}
