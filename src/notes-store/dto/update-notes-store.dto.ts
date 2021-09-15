import { PartialType } from '@nestjs/swagger'; 
import { CreateNotesStoreDto } from './create-notes-store.dto';

export class UpdateNotesStoreDto extends PartialType(CreateNotesStoreDto) {}
