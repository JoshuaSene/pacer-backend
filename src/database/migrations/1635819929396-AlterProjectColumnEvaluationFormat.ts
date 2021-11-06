import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProjectColumnEvaluationFormat1635819929396 implements MigrationInterface {
    name = 'AlterProjectColumnEvaluationFormat1635819929396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` ADD \`eval_format\` varchar(1) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project\` DROP COLUMN \`eval_format\``);
    }

}
