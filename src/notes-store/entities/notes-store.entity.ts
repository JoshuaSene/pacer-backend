import { Criteria } from "../../criteria/entities/criteria.entity";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotesStore {

    @PrimaryGeneratedColumn("uuid", {name: "id_evaluation"})
    idEvaluation: string;

    @Column({nullable:false, name: "id_evaluator"})
    idEvaluator: string;

    @Column({nullable:false, name: "id_evaluated"})
    idEvaluated: string;

    @Column({nullable:false, name: "id_group"})
    idGroup: string;

    @Column({nullable:false, name: "id_criteria"})
    idCriteria: string;

    @ManyToOne(() => Criteria, criterio => criterio.notes, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_criteria"  } ) 
    criterio: Criteria;

    @Column({nullable:false, name: "id_sprint"})
    idSprint: string;

    @Column({nullable: true, name: "note"}) 
    note: number;
   
    @Column({nullable: true, name: "obs", length:"800"})
    obs: string;

}
