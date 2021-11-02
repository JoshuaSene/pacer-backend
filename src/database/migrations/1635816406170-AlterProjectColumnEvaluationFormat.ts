import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProjectColumnEvaluationFormat1635816406170 implements MigrationInterface {
    name = 'AlterProjectColumnEvaluationFormat1635816406170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`evalFormat\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`evalFormat\``);
    }

}
