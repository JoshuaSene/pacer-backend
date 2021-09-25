import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSprints1632582867249 implements MigrationInterface {
    name = 'CreateSprints1632582867249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`sprint\` (\`id_sprint\` char(36) NOT NULL, \`initial_date\` date NOT NULL, \`final_date\` date NOT NULL, PRIMARY KEY (\`id_sprint\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`sprint\``);
    }

}
