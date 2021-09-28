import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSprints1632598611895 implements MigrationInterface {
    name = 'CreateSprints1632598611895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`team\` (\`id_team\` char(36) NOT NULL, \`id_project\` char(255) NOT NULL, \`team_name\` varchar(255) NOT NULL, \`sn_Activated\` varchar(1) NOT NULL, PRIMARY KEY (\`id_team\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` ADD CONSTRAINT \`FK_277a6a8112ef5205aef3c82da77\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` DROP FOREIGN KEY \`FK_277a6a8112ef5205aef3c82da77\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`team\``);
    }

}
