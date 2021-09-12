import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProjectEntity1631405537751 implements MigrationInterface {
    name = 'updateProjectEntity1631405537751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`description\` int NOT NULL`);
    }

}
