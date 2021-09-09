import { PartialType } from '@nestjs/mapped-types'; 
import { CreateCriteriaDto } from './create-criteria.dto';

export class UpdateCriterionDto extends PartialType(CreateCriteriaDto) {}
