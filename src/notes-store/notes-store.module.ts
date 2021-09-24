import { Module } from '@nestjs/common';
import { NotesStoreService } from './notes-store.service';
import { NotesStoreController } from './notes-store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesStore } from './entities/notes-store.entity';


@Module({
  controllers: [NotesStoreController],
  imports: [TypeOrmModule.forFeature([NotesStore])],
  providers: [NotesStoreService]
})
export class NotesStoreModule {}
