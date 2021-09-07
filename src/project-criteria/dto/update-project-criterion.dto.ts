import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCriterionDto } from './create-project-criterion.dto';

export class UpdateProjectCriterionDto extends PartialType(CreateProjectCriterionDto) {}
