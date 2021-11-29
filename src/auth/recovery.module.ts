import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { User } from '../user/entities/user.entity';
import { PasswordRecoveryController } from './auth.password-recovery.controller';
import { PasswordRecoveryService } from './auth.password-recovery.service';
 

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [PasswordRecoveryController],
    providers: [PasswordRecoveryService]
  })
export class RecoveryModule {}
