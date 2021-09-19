import {MigrationInterface, QueryRunner} from "typeorm";

export class createCriteria1631234882260 implements MigrationInterface {
    name = 'createCriteria1631234882260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`CRITERIA\` (\`id_criteria\` char(36) NOT NULL, \`desc_criteria\` varchar(755) NOT NULL, \`sn_ativo\` varchar(1) NOT NULL, PRIMARY KEY (\`id_criteria\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`CRITERIA\``);
    }

}
