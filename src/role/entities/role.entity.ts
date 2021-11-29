import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";

import { UserRole } from "../../user-role/entities/user-role.entity";

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