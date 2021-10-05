import {MigrationInterface, QueryRunner} from "typeorm";

export class createfkIdSprint1633394991772 implements MigrationInterface {
    name = 'createfkIdSprint1633394991772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_sprint\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_9e462141c6425f82e457a618821\` FOREIGN KEY (\`id_sprint\`) REFERENCES \`pacer\`.\`sprint\`(\`id_sprint\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_9e462141c6425f82e457a618821\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_sprint\` varchar(255) NOT NULL`);
    }

}
