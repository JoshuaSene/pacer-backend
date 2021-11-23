import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";
import { NotesStore } from "../entities/notes-store.entity";

export class ReturnNotesDashboardDto {
    
    @ApiProperty()
    @IsArray()
    selfNotes: Array<NotesStore>
    
    @ApiProperty()
    @IsArray()
    teamNotes: Array<NotesStore>
    
    constructor(selfNotes: Array<NotesStore>, teamNotes: Array<NotesStore>){
     this.selfNotes = selfNotes,
     this.teamNotes = teamNotes
    }
}
