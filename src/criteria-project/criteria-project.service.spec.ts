import { Test, TestingModule } from '@nestjs/testing';
import { CriteriaProjectService } from './criteria-project.service';

describe('CriteriaProjectService', () => {
  let service: CriteriaProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriteriaProjectService],
    }).compile();

    service = module.get<CriteriaProjectService>(CriteriaProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
