import { IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { NotesStore } from "../entities/notes-store.entity";

export class ReturnNotesDashboardDto {
    
    @ApiProperty()
    @IsArray()
    selfNotes: Array<NotesStore>
    
    @ApiProperty()
    selfNoteAvg: number
    
    @ApiProperty()
    @IsArray()
    teamNotes: Array<NotesStore>

    @ApiProperty()
    teamNoteValue: number
    
    constructor(selfNotes: Array<NotesStore>, teamNotes: Array<NotesStore>){
        this.selfNotes = selfNotes;
        this.teamNotes = teamNotes;
        this.teamNoteValue = this.teamNoteValue;
    }
}
