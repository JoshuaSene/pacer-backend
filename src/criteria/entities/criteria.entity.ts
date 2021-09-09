import { Entity, Column,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Criteria {
 
    @Column({name:"id_criteria"})
    @PrimaryGeneratedColumn('uuid')
    idCriteria      : string;

    @Column({nullable:false, name: "desc_criteria"})
    descCriteria   : string;
   
    @Column({nullable:false, name: "sn_ativo"})
    snAtivo        : string;
}
