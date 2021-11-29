import { Controller, Body, Put } from '@nestjs/common';

import { RecoveryPasswordDto } from './dto/recovery.dto';
import { PasswordRecoveryService } from './auth.password-recovery.service';
 

@Controller('recovery-password')
export class PasswordRecoveryController {
 
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}
 
  @Put()
  update( 
    @Body() recoveryPasswordDto: RecoveryPasswordDto): Promise<String> { 
    return this.passwordRecoveryService.update(recoveryPasswordDto); 
  }
}
