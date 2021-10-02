import {IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Helper } from './../../commons/helper';

export class CreateSprintDto { 

    @IsString()
    @ApiProperty()
    initialDate: String;

    @IsString()
    @ApiProperty()
    finalDate: String;

    public formatDates() {
        return {
            initialDate: Helper.stringToDate(this.initialDate, "dd/MM/yyyy","/"),
            finalDate: Helper.stringToDate(this.finalDate, "dd/MM/yyyy","/")
        }
    }
}
