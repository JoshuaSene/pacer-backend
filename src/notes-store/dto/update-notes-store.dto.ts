import { PartialType } from '@nestjs/mapped-types';
import { CreateNotesStoreDto } from './create-notes-store.dto';

export class UpdateNotesStoreDto extends PartialType(CreateNotesStoreDto) {}
