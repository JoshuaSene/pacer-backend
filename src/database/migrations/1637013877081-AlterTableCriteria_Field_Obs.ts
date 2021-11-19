import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableCriteriaFieldObs1637013877081 implements MigrationInterface {
    name = 'AlterTableCriteriaFieldObs1637013877081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD \`obs\` varchar(500) NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP COLUMN \`desc_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD \`desc_criteria\` varchar(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP COLUMN \`desc_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD \`desc_criteria\` varchar(800) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP COLUMN \`obs\``);
    }

}
