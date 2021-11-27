import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { TeamService } from './team.service';
import { Team } from './entities/team.entity';
import { TeamController } from './team.controller';

@Module({
  controllers: [TeamController],
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService]
})
export class TeamModule {}
