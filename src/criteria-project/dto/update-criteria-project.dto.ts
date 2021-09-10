import { PartialType } from '@nestjs/mapped-types';
import { CreateCriteriaProjectDto } from './create-criteria-project.dto';

export class UpdateCriteriaProjectDto extends PartialType(CreateCriteriaProjectDto) {}
