import {MigrationInterface, QueryRunner} from "typeorm";

export class createprojectuser1633397715922 implements MigrationInterface {
    name = 'createprojectuser1633397715922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`project_user\` (\`id_user\` char(36) NOT NULL, \`id_project\` char(36) NOT NULL, \`optional\` char(36) NOT NULL, \`sn_activated\` varchar(255) NOT NULL, PRIMARY KEY (\`id_user\`, \`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD CONSTRAINT \`FK_22a73427988dd82f746f72f01de\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD CONSTRAINT \`FK_0eb048fbdfb3f484d4a79fdffd8\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP FOREIGN KEY \`FK_0eb048fbdfb3f484d4a79fdffd8\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP FOREIGN KEY \`FK_22a73427988dd82f746f72f01de\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`project_user\``);
    }

}
