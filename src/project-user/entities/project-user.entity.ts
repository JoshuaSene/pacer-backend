import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "../../user/entities/user.entity";
import { Project } from "../../project/entities/project.entity";

@Entity()
export class ProjectUser {

    @PrimaryColumn('uuid', {name: "id_user"})
    idUser: string;

    @PrimaryColumn('uuid', {name: "id_project"})
    idProject: string;

    @ManyToOne(() => Project, (project: Project) => project.idProject, {primary: true})
    @JoinColumn({ name: 'id_project' })
    public project!: Project

    @ManyToOne(() => User, (user: User) => user.idUser, {primary: true})
    @JoinColumn({ name: 'id_user' })
    public user!: User

    @Column({nullable: false, name: "optional"})
    optional: Boolean;

    @Column({nullable: false, name: "sn_activated"})
    snActivated: string;
}
