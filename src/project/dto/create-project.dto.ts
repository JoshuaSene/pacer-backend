import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { Helper } from './../../commons/helper';

export class CreateProjectDto {
  
    @IsString()
    @ApiProperty()
    description: string;

    @IsString()
    @ApiProperty()
    openingDate: string;

    @IsString()
    @ApiProperty()
    closeDate: string;

    @IsString()
    @ApiProperty()
    evaluationFormat: string;

    public formatDates() {
        return {
            description: this.description,
            openingDate: Helper.stringToDate(this.openingDate, "dd/MM/yyyy","/"),
            closeDate: Helper.stringToDate(this.closeDate, "dd/MM/yyyy","/"),
            evaluationFormat: this.evaluationFormat
        }
    }
}
