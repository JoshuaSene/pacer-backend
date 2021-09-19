import { PartialType } from '@nestjs/swagger';
import { CreateCriteriaProjectDto } from './create-criteria-project.dto';

export class UpdateCriteriaProjectDto extends PartialType(CreateCriteriaProjectDto) {}
