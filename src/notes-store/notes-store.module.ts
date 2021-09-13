import { Module } from '@nestjs/common';
import { NotesStoreService } from './notes-store.service';
import { NotesStoreController } from './notes-store.controller';

@Module({
  controllers: [NotesStoreController],
  providers: [NotesStoreService]
})
export class NotesStoreModule {}
