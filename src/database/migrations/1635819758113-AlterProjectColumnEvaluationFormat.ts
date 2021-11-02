import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProjectColumnEvaluationFormat1635819758113 implements MigrationInterface {
    name = 'AlterProjectColumnEvaluationFormat1635819758113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` CHANGE \`evalFormat\` \`eval_format\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`eval_format\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`eval_format\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`eval_format\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`eval_format\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` CHANGE \`eval_format\` \`evalFormat\` varchar(255) NOT NULL`);
    }

}
