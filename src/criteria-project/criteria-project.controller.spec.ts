import { Test, TestingModule } from '@nestjs/testing';
import { CriteriaProjectController } from './criteria-project.controller';
import { CriteriaProjectService } from './criteria-project.service';

describe('CriteriaProjectController', () => {
  let controller: CriteriaProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriteriaProjectController],
      providers: [CriteriaProjectService],
    }).compile();

    controller = module.get<CriteriaProjectController>(CriteriaProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
