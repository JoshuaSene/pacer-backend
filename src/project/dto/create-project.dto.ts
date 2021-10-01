import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProjectDto {

    //Add User id 
  
    @IsString()
    @ApiProperty()
    description: string;

    @IsString()
    @ApiProperty()
    openingDate: string;

    @IsString()
    @ApiProperty()
    closeDate: string;

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
            description: this.description,
            openingDate: this.stringToDate(this.openingDate, "dd/MM/yyyy","/"),
            closeDate: this.stringToDate(this.closeDate, "dd/MM/yyyy","/")
        }
    }
}
