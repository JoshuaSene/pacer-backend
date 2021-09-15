import {MigrationInterface, QueryRunner} from "typeorm";

export class notes1631579325356 implements MigrationInterface {
    name = 'notes1631579325356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`notes_store\` (\`id_avaliacao\` char(36) NOT NULL, \`id_avaliado\` varchar(255) NOT NULL, \`id_avaliador\` varchar(255) NOT NULL, \`nota\` int NOT NULL, \`observacao\` varchar(800) NULL, PRIMARY KEY (\`id_avaliacao\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`notes_store\``);
    }

}
