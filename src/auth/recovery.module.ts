import { Module } from '@nestjs/common'; 
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { PasswordRecoveryController } from './auth.password-recovery.controller';
import { PasswordRecoveryService } from './auth.password-recovery.service';
 

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [PasswordRecoveryController],
    providers: [PasswordRecoveryService]
  })
export class RecoveryModule {}
