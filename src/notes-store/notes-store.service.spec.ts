import { Test, TestingModule } from '@nestjs/testing';
import { NotesStoreService } from './notes-store.service';

describe('NotesStoreService', () => {
  let service: NotesStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesStoreService],
    }).compile();

    service = module.get<NotesStoreService>(NotesStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
