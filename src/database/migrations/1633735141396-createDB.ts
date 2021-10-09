import {MigrationInterface, QueryRunner} from "typeorm";

export class createDB1633735141396 implements MigrationInterface {
    name = 'createDB1633735141396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`project\` (\`id_project\` char(36) NOT NULL, \`description\` varchar(255) NOT NULL, \`dt_opening\` date NOT NULL, \`dt_close\` date NOT NULL, PRIMARY KEY (\`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`role\` (\`id_role\` char(36) NOT NULL, \`roleName\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id_role\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user_role\` (\`id_user_role\` char(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_user\` char(36) NOT NULL, \`id_role\` char(36) NOT NULL, PRIMARY KEY (\`id_user_role\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user\` (\`id_user\` char(36) NOT NULL, \`login\` varchar(30) NOT NULL, \`nome\` varchar(60) NOT NULL, \`document\` varchar(20) NOT NULL, \`email\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`sn_ativo\` varchar(1) NOT NULL DEFAULT 'S', \`user_status\` varchar(8) NOT NULL DEFAULT 'enabled', UNIQUE INDEX \`IDX_71fdad8489d3d818ec393e6eb1\` (\`document\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id_user\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`sprint\` (\`id_sprint\` char(36) NOT NULL, \`id_project\` char(36) NOT NULL, \`initial_date\` date NOT NULL, \`final_date\` date NOT NULL, PRIMARY KEY (\`id_sprint\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`notes_store\` (\`id_evaluation\` char(36) NOT NULL, \`id_evaluator\` char(36) NOT NULL, \`id_evaluated\` char(36) NOT NULL, \`id_group\` varchar(255) NOT NULL, \`id_criteria\` char(36) NOT NULL, \`id_sprint\` char(36) NOT NULL, \`note\` int NULL, \`obs\` varchar(800) NULL, PRIMARY KEY (\`id_evaluation\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`criteria\` (\`id_criteria\` char(36) NOT NULL, \`desc_criteria\` varchar(800) NOT NULL, \`sn_ativo\` varchar(1) NOT NULL, PRIMARY KEY (\`id_criteria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`criteria_project\` (\`id_criteria\` char(36) NOT NULL, \`id_project\` char(36) NOT NULL, \`min_grade\` int NOT NULL, \`max_grade\` int NOT NULL, \`grade_weight\` int NOT NULL, \`sn_activated\` varchar(255) NOT NULL, PRIMARY KEY (\`id_criteria\`, \`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`project_user\` (\`id_user\` char(36) NOT NULL, \`id_project\` char(36) NOT NULL, \`optional\` varchar(255) NOT NULL, \`sn_activated\` varchar(255) NOT NULL, PRIMARY KEY (\`id_user\`, \`id_project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`team\` (\`id_team\` char(36) NOT NULL, \`id_project\` char(255) NOT NULL, \`team_name\` varchar(255) NOT NULL, \`sn_Activated\` varchar(1) NOT NULL, PRIMARY KEY (\`id_team\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user_team\` (\`id_user\` char(36) NOT NULL, \`id_team\` char(36) NOT NULL, \`is_scrum_master\` tinyint NOT NULL, \`sn_activated\` varchar(1) NOT NULL, PRIMARY KEY (\`id_user\`, \`id_team\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`sprint_project_project\` (\`sprintIdSprint\` char(36) NOT NULL, \`projectIdProject\` char(36) NOT NULL, INDEX \`IDX_8818322e0eb65548f4cf6763ba\` (\`sprintIdSprint\`), INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` (\`projectIdProject\`), PRIMARY KEY (\`sprintIdSprint\`, \`projectIdProject\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD CONSTRAINT \`FK_d371b8893cffc547b0f103207d8\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD CONSTRAINT \`FK_727c6adbaaf3de41e0c0c43cdcf\` FOREIGN KEY (\`id_role\`) REFERENCES \`pacer\`.\`role\`(\`id_role\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_da249ffc61a16614dd6cbc04199\` FOREIGN KEY (\`id_evaluator\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_dbf4c048870760364664e345fd3\` FOREIGN KEY (\`id_evaluated\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_bc9b32a2bd4f3e3ff17c9f1b819\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`pacer\`.\`criteria\`(\`id_criteria\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_9e462141c6425f82e457a618821\` FOREIGN KEY (\`id_sprint\`) REFERENCES \`pacer\`.\`sprint\`(\`id_sprint\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` ADD CONSTRAINT \`FK_9c105e563ed31a2364fb3aa8571\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` ADD CONSTRAINT \`FK_f126b9bc47e4c1cff059c6dd8af\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`pacer\`.\`criteria\`(\`id_criteria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD CONSTRAINT \`FK_22a73427988dd82f746f72f01de\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD CONSTRAINT \`FK_0eb048fbdfb3f484d4a79fdffd8\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` ADD CONSTRAINT \`FK_277a6a8112ef5205aef3c82da77\` FOREIGN KEY (\`id_project\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` ADD CONSTRAINT \`FK_26a55947bca51dbcf2c7c9d391d\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` ADD CONSTRAINT \`FK_6b9a3c2aa852be4b01967afaa70\` FOREIGN KEY (\`id_team\`) REFERENCES \`pacer\`.\`team\`(\`id_team\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` ADD CONSTRAINT \`FK_8818322e0eb65548f4cf6763ba2\` FOREIGN KEY (\`sprintIdSprint\`) REFERENCES \`pacer\`.\`sprint\`(\`id_sprint\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` ADD CONSTRAINT \`FK_760e6763fbdd182f9f2d2c4af6e\` FOREIGN KEY (\`projectIdProject\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` DROP FOREIGN KEY \`FK_760e6763fbdd182f9f2d2c4af6e\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` DROP FOREIGN KEY \`FK_8818322e0eb65548f4cf6763ba2\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` DROP FOREIGN KEY \`FK_6b9a3c2aa852be4b01967afaa70\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_team\` DROP FOREIGN KEY \`FK_26a55947bca51dbcf2c7c9d391d\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`team\` DROP FOREIGN KEY \`FK_277a6a8112ef5205aef3c82da77\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP FOREIGN KEY \`FK_0eb048fbdfb3f484d4a79fdffd8\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP FOREIGN KEY \`FK_22a73427988dd82f746f72f01de\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` DROP FOREIGN KEY \`FK_f126b9bc47e4c1cff059c6dd8af\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`criteria_project\` DROP FOREIGN KEY \`FK_9c105e563ed31a2364fb3aa8571\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_9e462141c6425f82e457a618821\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_bc9b32a2bd4f3e3ff17c9f1b819\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_dbf4c048870760364664e345fd3\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_da249ffc61a16614dd6cbc04199\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP FOREIGN KEY \`FK_727c6adbaaf3de41e0c0c43cdcf\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP FOREIGN KEY \`FK_d371b8893cffc547b0f103207d8\``);
        await queryRunner.query(`DROP INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`pacer\`.\`sprint_project_project\``);
        await queryRunner.query(`DROP INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`pacer\`.\`sprint_project_project\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`sprint_project_project\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user_team\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`team\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`project_user\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`criteria_project\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`criteria\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`notes_store\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`sprint\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`pacer\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_71fdad8489d3d818ec393e6eb1\` ON \`pacer\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user_role\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`role\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`project\``);
    }

}
