
import { User } from "../../user/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "../../role/entities/role.entity";

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn('uuid', {name: "id_user_role"})
    idUserRole: string; 

    @ManyToOne(() => User, user => user.idUser, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_user"  } ) 
    idUser: User;
    
    @ManyToOne(() => Role, role => role.idRole, {
        eager: true,
        onDelete: "RESTRICT",
        nullable: false,
        orphanedRowAction: "delete",
        primary: false,
        cascade: false,
    })
    @JoinColumn ( {  name : "id_role"  } ) 
    idRole: Role;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;   
}
