import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTeam1633649973776 implements MigrationInterface {
    name = 'CreateUserTeam1633649973776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user_team\` (\`id_user\` char(36) NOT NULL, \`id_team\` char(36) NOT NULL, \`is_scrum_master\` tinyint NOT NULL, \`sn_activated\` varchar(1) NOT NULL, PRIMARY KEY (\`id_user\`, \`id_team\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` ADD CONSTRAINT \`FK_26a55947bca51dbcf2c7c9d391d\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` ADD CONSTRAINT \`FK_6b9a3c2aa852be4b01967afaa70\` FOREIGN KEY (\`id_team\`) REFERENCES \`pacer\`.\`team\`(\`id_team\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` DROP FOREIGN KEY \`FK_6b9a3c2aa852be4b01967afaa70\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` DROP FOREIGN KEY \`FK_26a55947bca51dbcf2c7c9d391d\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user_team\``);
    }

}
