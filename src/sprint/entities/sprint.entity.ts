import { Entity, Column,  PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity({name:"sprint"})
export class Sprint {
  
  
    @PrimaryGeneratedColumn("uuid", {name: "id_sprint"})
    idSprint      : string;

    @Column({type: 'date', nullable:false, name: "initial_date"})
    initialDate   : Date;
   
    @Column({type: 'date', nullable:false, name: "final_date"})
    finalDate        : Date;
}
