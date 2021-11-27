import { Entity, Column,  PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import {Project} from "../../project/entities/project.entity";

@Entity({name:"sprint"})
export class Sprint {

    @PrimaryGeneratedColumn("uuid", {name: "id_sprint"})
    idSprint      : string;

    @Column({type: 'uuid', nullable:false, name: "id_project"})
    idProject     : string;

    @Column({type: 'date', nullable:false, name: "initial_date"})
    initialDate   : Date;
   
    @Column({type: 'date', nullable:false, name: "final_date"})
    finalDate     : Date;

    @ManyToMany(() => Project)
    @JoinTable()
    project:Project[];
    
    public didStart(): Boolean {
        let today = new Date();
        let initial = new Date(this.initialDate);
        return initial.getTime() <= today.getTime();
    }

    public didEnd(): Boolean {
        let today = new Date();
        let final = new Date(this.finalDate);
        return final.getTime() <= today.getTime();
    }
}
