import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCriteriaController } from './project-criteria.controller';
import { ProjectCriteriaService } from './project-criteria.service';

describe('ProjectCriteriaController', () => {
  let controller: ProjectCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectCriteriaController],
      providers: [ProjectCriteriaService],
    }).compile();

    controller = module.get<ProjectCriteriaController>(ProjectCriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
