import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
        name: "document",
        length: 20
    })
    document: string;

    @Column({
        nullable: false, 
        name: "email"
    })
    email: string;

    @Column({
        nullable: false, 
        name: "rule"
    })
    rule: string;

    @Column({
        nullable: false, 
        name: "sn_ativo", 
        length:"1"
    })
    snAtivo: string;
}