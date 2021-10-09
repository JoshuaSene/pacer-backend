import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsUUID } from 'class-validator';

export class UserApprovalDto {
  
  @IsUUID()
  @ApiProperty()
  id: string;

  @IsBoolean()
  @ApiProperty()
  approved: Boolean;
}