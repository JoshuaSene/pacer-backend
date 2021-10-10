import { 
  IsBoolean, 
  IsString, 
  IsUUID, 
  MaxLength 
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserTeamDto {

  @IsUUID()
  @ApiProperty()
  public idUser: string;

  @IsUUID()
  @ApiProperty()
  public idTeam: string;

  @IsBoolean()
  @ApiProperty()
  public isScrumMaster: Boolean;

  @IsString()
  @MaxLength(1)
  @ApiProperty()
  public snActivated: string;
}
