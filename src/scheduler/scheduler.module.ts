import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SchedulerService } from './scheduler.service';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [SchedulerService]
})
export class SchedulerModule {
}