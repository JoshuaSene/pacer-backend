import { Helper } from './../../commons/helper';
import { PartialType } from '@nestjs/swagger'; 
import { CreateSprintDto } from './create-sprint.dto';

export class UpdateSprintDto extends PartialType(CreateSprintDto) {
  
  public formatDateFields() {
    return {
      initialDate: Helper.stringToDate(this.initialDate, "dd/MM/yyyy","/"),
      finalDate: Helper.stringToDate(this.finalDate, "dd/MM/yyyy","/")
    }
  }
}
