import {MigrationInterface, QueryRunner} from "typeorm";

export class editScrumMaster1636070361735 implements MigrationInterface {
    name = 'editScrumMaster1636070361735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` ADD \`is_active\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` DROP COLUMN \`is_active\``);
    }

}
