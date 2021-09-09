import {MigrationInterface, QueryRunner} from "typeorm";

export class editCriteria1631153354740 implements MigrationInterface {
    name = 'editCriteria1631153354740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`criteria\` (\`idCriteria\` char(36) NOT NULL, \`desc_criteria\` varchar(255) NOT NULL, \`sn_ativo\` varchar(255) NOT NULL, PRIMARY KEY (\`idCriteria\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`criteria\``);
    }

}
