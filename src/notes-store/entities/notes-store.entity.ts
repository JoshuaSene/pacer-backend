import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotesStore {

    @PrimaryGeneratedColumn("uuid", {name: "id_avaliacao"})
    idAvaliacao      : string;

    @Column({nullable:false, name: "id_avaliado"})
    idAvaliado   : string;

    @Column({nullable:false, name: "id_avaliador"})
    idAvaliador   : string;

    @Column({nullable:false, name: "nota"})
    nota: number;
   
    @Column({nullable: true, name: "observacao", length:"800"})
    observacao: string;

}
