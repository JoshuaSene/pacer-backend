import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn('uuid')
    @Column({name: "id_project"})
    idProject: string;
  
    @Column({nullable: false})
    description: number;

    @Column({nullable: false, name: "dt_opening", type: 'date'})
    openingDate: string;

    @Column({nullable: false, name: "dt_close", type: 'date'})
    closeDate: string;
}
