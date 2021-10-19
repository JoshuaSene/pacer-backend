import {IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Helper } from './../../commons/helper';

export class CreateSprintDto { 

    @IsString()
    @ApiProperty()
    initialDate: string;

    @IsString()
    @ApiProperty()
    finalDate: string;

    @IsString()
    @ApiProperty()
    idProject: string;

    public formatDates() {
        return {
            idProject: this.idProject,
            initialDate: Helper.stringToDate(this.initialDate, "dd/MM/yyyy","/"),
            finalDate: Helper.stringToDate(this.finalDate, "dd/MM/yyyy","/")
        }
    }
}
