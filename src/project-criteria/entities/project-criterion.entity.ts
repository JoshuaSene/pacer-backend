import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectCriterion {
 
    @PrimaryGeneratedColumn('uuid')
    id_criterio: string;

    @Column({nullable:false})
    desc_criterio   : string;

    @Column({nullable:false})
    nota_minima     : number;

    @Column({nullable:false})
    nota_maxima     : number;

    @Column({nullable:false})
    nota_peso       : number;
}
