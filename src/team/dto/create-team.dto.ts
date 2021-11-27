import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateTeamDto { 

    @IsUUID()
    @ApiProperty()
    idProject: string;

    @IsString()
    @ApiProperty()
    teamName: string;

    @IsString()
    @ApiProperty()
    snActivated: string;
}
