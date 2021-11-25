import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SchedulerService } from './scheduler.service';
import { NotesStoreModule } from './../notes-store/notes-store.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NotesStoreModule
  ],
  providers: [SchedulerService]
})
export class SchedulerModule {
}