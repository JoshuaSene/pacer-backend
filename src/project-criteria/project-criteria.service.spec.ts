import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCriteriaService } from './project-criteria.service';

describe('ProjectCriteriaService', () => {
  let service: ProjectCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectCriteriaService],
    }).compile();

    service = module.get<ProjectCriteriaService>(ProjectCriteriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
