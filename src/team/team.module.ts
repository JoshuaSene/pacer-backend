import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { Team } from './entities/team.entity';

@Module({
  controllers: [TeamController],
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService]
})
export class TeamModule {}