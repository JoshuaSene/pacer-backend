import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRoleService } from './user-role.service';
import { UserRole } from './entities/user-role.entity';
import { UserRoleController } from './user-role.controller';

@Module({
  controllers: [UserRoleController],
  imports: [TypeOrmModule.forFeature([UserRole])],
  providers: [UserRoleService]
})
export class UserRoleModule {}
