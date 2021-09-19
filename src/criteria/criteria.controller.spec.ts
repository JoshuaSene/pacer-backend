import { Test, TestingModule } from '@nestjs/testing'; 
import { CriteriaController } from './criteria.controller';
import { ProjectCriteriaService } from './criteria.service';

describe('ProjectCriteriaController', () => {
  let controller: CriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriteriaController],
      providers: [ProjectCriteriaService],
    }).compile();

    controller = module.get<CriteriaController>(CriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
