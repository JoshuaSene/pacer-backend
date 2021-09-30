import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1633042458606 implements MigrationInterface {
    name = 'CreateUser1633042458606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user\` (\`id_user\` char(36) NOT NULL, \`login\` varchar(30) NOT NULL, \`nome\` varchar(60) NOT NULL, \`document\` varchar(20) NOT NULL, \`email\` varchar(255) NOT NULL, \`rule\` varchar(255) NOT NULL, \`sn_ativo\` varchar(1) NOT NULL, PRIMARY KEY (\`id_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_criteria\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` CHANGE \`note\` \`note\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_bc9b32a2bd4f3e3ff17c9f1b819\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`pacer\`.\`criteria\`(\`id_criteria\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_bc9b32a2bd4f3e3ff17c9f1b819\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` CHANGE \`note\` \`note\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_criteria\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user\``);
    }

}
