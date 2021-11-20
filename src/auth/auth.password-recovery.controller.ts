import { Controller, Body, Patch, Param, Put, } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { PasswordRecoveryService } from './auth.password-recovery.service';
import { RecoveryPasswordDto } from './dto/recovery.dto';
 

@Controller('recovery-password')
export class PasswordRecoveryController {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}
 

  @Put()
  update( 
    @Body() recoveryPasswordDto: RecoveryPasswordDto): Promise<String> { 
    return this.passwordRecoveryService.update(recoveryPasswordDto); 
  }
}
