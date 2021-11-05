import {MigrationInterface, QueryRunner} from "typeorm";

export class editScrumMaster1636070361735 implements MigrationInterface {
    name = 'editScrumMaster1636070361735'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_scrum_master\` \`is_active\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` ADD \`is_scrum_master\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_active\` \`is_active\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_active\` \`is_active\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` DROP COLUMN \`is_scrum_master\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_active\` \`is_scrum_master\` tinyint NOT NULL DEFAULT 0`);
    }

}
