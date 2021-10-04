import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from './entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RoleController],
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService]
})
export class RoleModule {}
