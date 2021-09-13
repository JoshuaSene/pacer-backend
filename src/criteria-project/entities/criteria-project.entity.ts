import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { Project } from "../../project/entities/project.entity";
import { Criteria } from "../../criteria/entities/criteria.entity";

@Entity()
export class CriteriaProject {

    @PrimaryColumn('uuid', {name: "id_criteria"})
    idCriteria: string;

    @PrimaryColumn('uuid', {name: "id_project"})
    idProject: string;

    @ManyToOne(() => Project, (project: Project) => project.idProject, {primary: true})
    @JoinColumn({ name: 'id_project' })
    public project!: Project

    @ManyToOne(() => Criteria, (criteria: Criteria) => criteria.idCriteria, {primary: true})
    @JoinColumn({ name: 'id_criteria' })
    public criteria!: Criteria

    @Column({nullable: false, name: "min_grade"})
    minGrade: number;

    @Column({nullable: false, name: "max_grade"})
    maxGrade: number;

    @Column({nullable: false, name: "grade_weight"})
    gradeWeight : number;

    @Column({nullable: false, name: "sn_activated"})
    snActivated: string;

    isActivated(): Boolean {
        return this.snActivated.toLowerCase() === 's';
    }
}
