import {MigrationInterface, QueryRunner} from "typeorm";

export class createProject1630983492685 implements MigrationInterface {
    name = 'createProject1630983492685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`project_criterion\` (\`id_criterio\` char(36) NOT NULL, \`id_projeto\` int NOT NULL, \`desc_criterio\` varchar(255) NOT NULL, \`nota_minima\` int NOT NULL, \`nota_maxima\` int NOT NULL, \`nota_peso\` int NOT NULL, \`sn_ativo\` varchar(255) NOT NULL, PRIMARY KEY (\`id_criterio\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`project_criterion\``);
    }

}
