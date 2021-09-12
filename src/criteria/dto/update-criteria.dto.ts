import { PartialType } from '@nestjs/swagger'; 
import { CreateCriteriaDto } from './create-criteria.dto';

export class UpdateCriterionDto extends PartialType(CreateCriteriaDto) {}
