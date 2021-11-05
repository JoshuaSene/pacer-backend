import {MigrationInterface, QueryRunner} from "typeorm";

export class defaultOnIsActive1636072476620 implements MigrationInterface {
    name = 'defaultOnIsActive1636072476620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_active\` \`is_active\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` CHANGE \`is_active\` \`is_active\` tinyint NOT NULL`);
    }

}
