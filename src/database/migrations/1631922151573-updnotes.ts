import {MigrationInterface, QueryRunner} from "typeorm";

export class updnotes1631922151573 implements MigrationInterface {
    name = 'updnotes1631922151573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`notes_store\` (\`id_evaluation\` char(36) NOT NULL, \`id_evaluator\` varchar(255) NOT NULL, \`id_evaluated\` varchar(255) NOT NULL, \`id_group\` varchar(255) NOT NULL, \`id_criteria\` varchar(255) NOT NULL, \`id_sprint\` varchar(255) NOT NULL, \`note\` int NOT NULL, \`obs\` varchar(800) NULL, PRIMARY KEY (\`id_evaluation\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pacer\`.\`notes_store\``);
    }

}
