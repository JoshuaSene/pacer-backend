import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { User } from "../../user/entities/user.entity";
import { Sprint } from "../../sprint/entities/sprint.entity";
import { Criteria } from "../../criteria/entities/criteria.entity";

@Entity()
export class NotesStore {

    @PrimaryGeneratedColumn("uuid", {name: "id_evaluation"})
    idEvaluation: string;

    @Column({nullable:false, name: "id_evaluator"})
    idEvaluator: string;

    @ManyToOne(() => User, user => user.idUser, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_evaluator"  } ) 
    evaluator: User;

    @Column({nullable:false, name: "id_evaluated"})
    idEvaluated: string;

    @ManyToOne(() => User, user => user.idUser, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_evaluated"  } ) 
    evaluated: User;

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

    @ManyToOne(() => Sprint, sprint => sprint.idSprint, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_sprint"  } ) 
    sprint: Sprint;

    @Column({nullable: true, name: "note"}) 
    note: number;
   
    @Column({nullable: true, name: "obs", length:"800"})
    obs: string;
}
