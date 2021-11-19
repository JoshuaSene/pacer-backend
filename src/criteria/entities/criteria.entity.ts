import { NotesStore } from "../../notes-store/entities/notes-store.entity";
import { Entity, Column,  PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({name:"criteria"})
export class Criteria {
  
    @PrimaryGeneratedColumn("uuid", {name: "id_criteria"})
    idCriteria      : string;

    @Column({nullable:false, name: "desc_criteria", length:"30", unique: true})
    descCriteria   : string;
   
    @Column({nullable:true , name: "obs", length:"500"})
    obs            : string;

    @Column({nullable:false, name: "sn_ativo", length:"1"})
    snAtivo        : string;

    @OneToMany(() => NotesStore, notes => notes.criterio)
    notes: NotesStore[];   
     
}
