import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableCriteriaFieldObs1637014142516 implements MigrationInterface {
    name = 'AlterTableCriteriaFieldObs1637014142516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD UNIQUE INDEX \`IDX_b2a3e20d6b95749dad6935f694\` (\`desc_criteria\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP INDEX \`IDX_b2a3e20d6b95749dad6935f694\``);
    }

}
