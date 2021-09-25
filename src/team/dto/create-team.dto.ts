import { ApiProperty } from '@nestjs/swagger';
import {IsString} from 'class-validator';

export class CreateTeamDto { 

    @IsString()
    @ApiProperty()
    id_project: string;

    @IsString()
    @ApiProperty()
    teamName: string;

    @IsString()
    @ApiProperty()
    snActivated: string;

}
