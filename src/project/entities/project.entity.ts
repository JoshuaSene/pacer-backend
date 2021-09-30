import { Team } from "src/team/entities/team.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn('uuid', {name: "id_project"})
    idProject: string;

    //Add User id 
  
    @Column({nullable: false})
    description: string;

    @Column({nullable: false, name: "dt_opening", type: 'date'})
    openingDate: string;

    @Column({nullable: false, name: "dt_close", type: 'date'})
    closeDate: string;

    @OneToMany('Team', (team: Team) => team.project)
    teams: Team[]
}
