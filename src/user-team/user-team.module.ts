import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './../user/entities/user.entity';
import { Team } from './../team/entities/team.entity';
import { UserTeamService } from './user-team.service';
import { UserTeam } from './entities/user-team.entity';
import { UserTeamController } from './user-team.controller';

@Module({
  controllers: [UserTeamController],
  imports: [TypeOrmModule.forFeature([User, Team, UserTeam])],
  providers: [UserTeamService]
})
export class UserTeamModule {}
