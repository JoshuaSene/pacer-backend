import { UserRole } from "../../user-role/entities/user-role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn('uuid', {name: "id_role"})
    idRole: string;
  
    @Column({nullable: false})
    roleName: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => UserRole, userRole => userRole.idRole)
    userRoles: UserRole[];  
}