import { Criteria } from "src/criteria/entities/criteria.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NotesStore {

    @PrimaryGeneratedColumn("uuid", {name: "id_evaluation"})
    idEvaluation      : string;

    @Column({nullable:false, name: "id_evaluator"})
    idEvaluator   : string;

    @Column({nullable:false, name: "id_evaluated"})
    idEvaluated   : string;

    @Column({nullable:false, name: "id_group"})
    idGroup   : string;

    @Column({nullable:false, name: "id_criteria"})
    idCriteria   : string;

    // @OneToMany(() => Criteria, (post: Post) => post.author)
    // public posts: Post[];

    @Column({nullable:false, name: "id_sprint"})
    idSprint   : string;

    @Column({nullable:false, name: "note"})
    note: number;
   
    @Column({nullable: true, name: "obs", length:"800"})
    obs: string;

}
