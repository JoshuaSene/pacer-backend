import {MigrationInterface, QueryRunner} from "typeorm";

export class createCriteriaProjectEntity1631321180638 implements MigrationInterface {
    name = 'createCriteriaProjectEntity1631321180638'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`project\` (\`id_project\` char(36) NOT NULL, \`description\` int NOT NULL, \`dt_opening\` date NOT NULL, \`dt_close\` date NOT NULL, PRIMARY KEY (\`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`criteria_project\` (\`id_criteria\` char(36) NOT NULL, \`id_project\` char(36) NOT NULL, \`min_grade\` int NOT NULL, \`max_grade\` int NOT NULL, \`grade_weight\` int NOT NULL, \`sn_activated\` varchar(255) NOT NULL, PRIMARY KEY (\`id_criteria\`, \`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` ADD CONSTRAINT \`FK_9c105e563ed31a2364fb3aa8571\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` ADD CONSTRAINT \`FK_f126b9bc47e4c1cff059c6dd8af\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`pacer\`.\`criteria\`(\`id_criteria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` DROP FOREIGN KEY \`FK_f126b9bc47e4c1cff059c6dd8af\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` DROP FOREIGN KEY \`FK_9c105e563ed31a2364fb3aa8571\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`criteria_project\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`project\``);
    }

}
