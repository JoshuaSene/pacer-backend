import { ApiProperty } from '@nestjs/swagger';
import {IsDate, IsString} from 'class-validator';

export class CreateSprintDto { 

    @IsString()
    @ApiProperty()
    initialDate: String;

    @IsString()
    @ApiProperty()
    finalDate: String;

    private stringToDate(_date,_format,_delimiter)
    {
        var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
    }

    public formatDates() {
        return {
            initialDate: this.stringToDate(this.initialDate, "dd/MM/yyyy","/"),
            finalDate: this.stringToDate(this.finalDate, "dd/MM/yyyy","/")
        }
    }
}
