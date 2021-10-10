import { Entity, Column,  PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne} from "typeorm";
import { Project } from "../../project/entities/project.entity";

@Entity({name:"team"})
export class Team {
  
    @PrimaryGeneratedColumn("uuid", {name: "id_team"})
    idTeam      : string;
    
    @Column({nullable:false, name: "id_project", length:"255"})
    idProject   : string;

    @ManyToOne(() => Project, (project: Project) => project.teams)
    @JoinColumn({name: 'id_project'})
    public project!: Project

    @Column({nullable:false, name: "team_name", length:"255"})
    teamName   : string;
   
    @Column({nullable:false, name: "sn_Activated", length:"1"})
    snActivated        : string;

}