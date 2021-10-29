import { hashSync } from 'bcrypt';
import { 
    BeforeInsert,
    Column, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { NotesStore } from "../../notes-store/entities/notes-store.entity";
import { UserRole } from "../../user-role/entities/user-role.entity";

@Entity({name:"user"})
export class User {
    
    @PrimaryGeneratedColumn("uuid", {name: "id_user"})
    idUser: string;

    @Column({
        nullable: false, 
        name: "login",
        length: 30
    })
    login: string;
   
    @Column({
        nullable: false, 
        name: "nome",
        length: 60
    })
    name: string;

    @Column({
        nullable: false,
        unique: true, 
        name: "document",
        length: 20
    })
    document: string;

    @Column({
        nullable: false, 
        unique: true,
        name: "email"
    })
    email: string;

    @Column({
        nullable: false, 
        name: "role"
    })
    role: string;

    @Column({
        nullable: false, 
        name: "sn_ativo", 
        length:"1",
        default: "S"
    })
    snAtivo: string;

    @Column({
        nullable: false, 
        name: "user_status", 
        length:"8",
        default: "enabled"
    })
    status: string;

    @Column()
    password: string;

    @OneToMany(() => NotesStore, notesStore => notesStore.idEvaluated)
    notesStoreEvaluated: NotesStore[]; 

    @OneToMany(() => NotesStore, notesStore => notesStore.idEvaluator)
    notesStoreEvaluator: NotesStore[]; 

    @OneToMany(() => UserRole, userRole => userRole.idUser)
    userRoles: UserRole[];  

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}