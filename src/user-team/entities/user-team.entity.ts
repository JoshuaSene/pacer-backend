import { 
  Column,
  Entity, 
  JoinColumn,
  ManyToOne, 
  PrimaryColumn
} from 'typeorm';

import { Team } from './../../team/entities/team.entity';
import { User } from './../../user/entities/user.entity';

@Entity()
export class UserTeam {

  @PrimaryColumn('uuid', {name: "id_user"})
  public idUser: string;

  @PrimaryColumn('uuid', {name: "id_team"})
  public idTeam: string;

  @ManyToOne(() => User, (user: User) => user.idUser, {primary: true})
  @JoinColumn({ name: 'id_user' })
  public user!: User

  @ManyToOne(() => Team, (team: Team) => team.idTeam, {primary: true})
  @JoinColumn({ name: 'id_team' })
  public team!: Team

  @Column({nullable: false, name: "is_scrum_master"})
  public isScrumMaster: Boolean

  @Column({
    nullable: false, 
    length: 1, 
    name: "sn_activated"
  })
  public snActivated: string;

  public isActivated(): Boolean {
    return this.snActivated.toLowerCase() === 's';
  }
}
