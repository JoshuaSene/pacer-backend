import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class ProjectCriterion {
    
    @PrimaryColumn({type:'uuid'})
    id_criterio     : number;

    @Column({nullable:false})
    id_projeto      : number;

    @Column({nullable:false})
    desc_criterio   : string;

    @Column({nullable:false})
    nota_minima     : number;

    @Column({nullable:false})
    nota_maxima     : number;

    @Column({nullable:false})
    nota_peso       : number;

    @Column({nullable:false})
    sn_ativo        : string;
}
