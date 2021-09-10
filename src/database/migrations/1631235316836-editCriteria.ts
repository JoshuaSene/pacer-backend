import {MigrationInterface, QueryRunner} from "typeorm";

export class editCriteria1631235316836 implements MigrationInterface {
    name = 'editCriteria1631235316836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP COLUMN \`desc_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD \`desc_criteria\` varchar(800) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` DROP COLUMN \`desc_criteria\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria\` ADD \`desc_criteria\` varchar(755) NOT NULL`);
    }

}
