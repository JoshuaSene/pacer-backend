import { Test, TestingModule } from '@nestjs/testing';
import { NotesStoreController } from './notes-store.controller';
import { NotesStoreService } from './notes-store.service';

describe('NotesStoreController', () => {
  let controller: NotesStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesStoreController],
      providers: [NotesStoreService],
    }).compile();

    controller = module.get<NotesStoreController>(NotesStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
