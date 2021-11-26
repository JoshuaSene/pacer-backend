import {MigrationInterface, QueryRunner} from "typeorm";

export class UsersAlterTable1637808617312 implements MigrationInterface {
    name = 'UsersAlterTable1637808617312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP FOREIGN KEY \`FK_9c105e563ed31a2364fb3aa8571\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP FOREIGN KEY \`FK_22a73427988dd82f746f72f01de\``);
        await queryRunner.query(`ALTER TABLE \`team\` DROP FOREIGN KEY \`FK_277a6a8112ef5205aef3c82da77\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP FOREIGN KEY \`FK_760e6763fbdd182f9f2d2c4af6e\``);
        await queryRunner.query(`ALTER TABLE \`project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`id_project\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_727c6adbaaf3de41e0c0c43cdcf\``);
        await queryRunner.query(`ALTER TABLE \`role\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`role\` ADD \`id_role\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_d371b8893cffc547b0f103207d8\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_user_role\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_user_role\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_user\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_role\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_da249ffc61a16614dd6cbc04199\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_dbf4c048870760364664e345fd3\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP FOREIGN KEY \`FK_0eb048fbdfb3f484d4a79fdffd8\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP FOREIGN KEY \`FK_26a55947bca51dbcf2c7c9d391d\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id_user\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`document\` \`document\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_9e462141c6425f82e457a618821\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP FOREIGN KEY \`FK_8818322e0eb65548f4cf6763ba2\``);
        await queryRunner.query(`ALTER TABLE \`sprint\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`sprint\` ADD \`id_sprint\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`sprint\` ADD \`id_project\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_bc9b32a2bd4f3e3ff17c9f1b819\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluation\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluation\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluator\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluator\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluated\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_criteria\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_sprint\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP FOREIGN KEY \`FK_f126b9bc47e4c1cff059c6dd8af\``);
        await queryRunner.query(`ALTER TABLE \`criteria\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`criteria\` ADD \`id_criteria\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_criteria\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD \`id_project\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_criteria\`, \`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD \`id_criteria\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_project\`, \`id_criteria\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD \`id_user\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_project\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD \`id_project\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_user\`, \`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP FOREIGN KEY \`FK_6b9a3c2aa852be4b01967afaa70\``);
        await queryRunner.query(`ALTER TABLE \`team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`team\` DROP COLUMN \`id_team\``);
        await queryRunner.query(`ALTER TABLE \`team\` ADD \`id_team\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`team\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`team\` ADD \`id_project\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_team\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD \`id_user\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_team\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP COLUMN \`id_team\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD \`id_team\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_user\`, \`id_team\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`projectIdProject\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`sprint_project_project\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP COLUMN \`sprintIdSprint\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD \`sprintIdSprint\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`projectIdProject\`, \`sprintIdSprint\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`sprintIdSprint\`)`);
        await queryRunner.query(`DROP INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`sprint_project_project\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP COLUMN \`projectIdProject\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD \`projectIdProject\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`sprintIdSprint\`, \`projectIdProject\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`sprint_project_project\` (\`sprintIdSprint\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`sprint_project_project\` (\`projectIdProject\`)`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_d371b8893cffc547b0f103207d8\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_727c6adbaaf3de41e0c0c43cdcf\` FOREIGN KEY (\`id_role\`) REFERENCES \`role\`(\`id_role\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_da249ffc61a16614dd6cbc04199\` FOREIGN KEY (\`id_evaluator\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_dbf4c048870760364664e345fd3\` FOREIGN KEY (\`id_evaluated\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_bc9b32a2bd4f3e3ff17c9f1b819\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`criteria\`(\`id_criteria\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_9e462141c6425f82e457a618821\` FOREIGN KEY (\`id_sprint\`) REFERENCES \`sprint\`(\`id_sprint\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD CONSTRAINT \`FK_9c105e563ed31a2364fb3aa8571\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD CONSTRAINT \`FK_f126b9bc47e4c1cff059c6dd8af\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`criteria\`(\`id_criteria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD CONSTRAINT \`FK_22a73427988dd82f746f72f01de\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD CONSTRAINT \`FK_0eb048fbdfb3f484d4a79fdffd8\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`team\` ADD CONSTRAINT \`FK_277a6a8112ef5205aef3c82da77\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD CONSTRAINT \`FK_26a55947bca51dbcf2c7c9d391d\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD CONSTRAINT \`FK_6b9a3c2aa852be4b01967afaa70\` FOREIGN KEY (\`id_team\`) REFERENCES \`team\`(\`id_team\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD CONSTRAINT \`FK_8818322e0eb65548f4cf6763ba2\` FOREIGN KEY (\`sprintIdSprint\`) REFERENCES \`sprint\`(\`id_sprint\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD CONSTRAINT \`FK_760e6763fbdd182f9f2d2c4af6e\` FOREIGN KEY (\`projectIdProject\`) REFERENCES \`project\`(\`id_project\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP FOREIGN KEY \`FK_760e6763fbdd182f9f2d2c4af6e\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP FOREIGN KEY \`FK_8818322e0eb65548f4cf6763ba2\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP FOREIGN KEY \`FK_6b9a3c2aa852be4b01967afaa70\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP FOREIGN KEY \`FK_26a55947bca51dbcf2c7c9d391d\``);
        await queryRunner.query(`ALTER TABLE \`team\` DROP FOREIGN KEY \`FK_277a6a8112ef5205aef3c82da77\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP FOREIGN KEY \`FK_0eb048fbdfb3f484d4a79fdffd8\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP FOREIGN KEY \`FK_22a73427988dd82f746f72f01de\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP FOREIGN KEY \`FK_f126b9bc47e4c1cff059c6dd8af\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP FOREIGN KEY \`FK_9c105e563ed31a2364fb3aa8571\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_9e462141c6425f82e457a618821\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_bc9b32a2bd4f3e3ff17c9f1b819\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_dbf4c048870760364664e345fd3\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP FOREIGN KEY \`FK_da249ffc61a16614dd6cbc04199\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_727c6adbaaf3de41e0c0c43cdcf\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_d371b8893cffc547b0f103207d8\``);
        await queryRunner.query(`DROP INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`sprint_project_project\``);
        await queryRunner.query(`DROP INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`sprint_project_project\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`sprintIdSprint\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP COLUMN \`projectIdProject\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD \`projectIdProject\` char(36) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`sprint_project_project\` (\`projectIdProject\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`projectIdProject\`, \`sprintIdSprint\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`projectIdProject\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP COLUMN \`sprintIdSprint\``);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD \`sprintIdSprint\` char(36) NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`sprint_project_project\` (\`sprintIdSprint\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD PRIMARY KEY (\`projectIdProject\`, \`sprintIdSprint\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP COLUMN \`id_team\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD \`id_team\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_team\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_team\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD \`id_user\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_team\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD PRIMARY KEY (\`id_team\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`team\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`team\` ADD \`id_project\` char(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`team\` DROP COLUMN \`id_team\``);
        await queryRunner.query(`ALTER TABLE \`team\` ADD \`id_team\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`team\` ADD PRIMARY KEY (\`id_team\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD CONSTRAINT \`FK_6b9a3c2aa852be4b01967afaa70\` FOREIGN KEY (\`id_team\`) REFERENCES \`team\`(\`id_team\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD \`id_project\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_project\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD \`id_user\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project_user\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD PRIMARY KEY (\`id_project\`, \`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD \`id_criteria\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_criteria\`, \`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_criteria\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD \`id_project\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD PRIMARY KEY (\`id_criteria\`, \`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`criteria\` ADD \`id_criteria\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`criteria\` ADD PRIMARY KEY (\`id_criteria\`)`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD CONSTRAINT \`FK_f126b9bc47e4c1cff059c6dd8af\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`criteria\`(\`id_criteria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_sprint\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_criteria\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_criteria\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluated\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluated\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluator\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluator\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` DROP COLUMN \`id_evaluation\``);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD \`id_evaluation\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD PRIMARY KEY (\`id_evaluation\`)`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_bc9b32a2bd4f3e3ff17c9f1b819\` FOREIGN KEY (\`id_criteria\`) REFERENCES \`criteria\`(\`id_criteria\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sprint\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`sprint\` ADD \`id_project\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sprint\` DROP COLUMN \`id_sprint\``);
        await queryRunner.query(`ALTER TABLE \`sprint\` ADD \`id_sprint\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sprint\` ADD PRIMARY KEY (\`id_sprint\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD CONSTRAINT \`FK_8818322e0eb65548f4cf6763ba2\` FOREIGN KEY (\`sprintIdSprint\`) REFERENCES \`sprint\`(\`id_sprint\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_9e462141c6425f82e457a618821\` FOREIGN KEY (\`id_sprint\`) REFERENCES \`sprint\`(\`id_sprint\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`document\` \`document\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`id_user\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD PRIMARY KEY (\`id_user\`)`);
        await queryRunner.query(`ALTER TABLE \`user_team\` ADD CONSTRAINT \`FK_26a55947bca51dbcf2c7c9d391d\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD CONSTRAINT \`FK_0eb048fbdfb3f484d4a79fdffd8\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_dbf4c048870760364664e345fd3\` FOREIGN KEY (\`id_evaluated\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notes_store\` ADD CONSTRAINT \`FK_da249ffc61a16614dd6cbc04199\` FOREIGN KEY (\`id_evaluator\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_role\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_user\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_user\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP COLUMN \`id_user_role\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD \`id_user_role\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD PRIMARY KEY (\`id_user_role\`)`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_d371b8893cffc547b0f103207d8\` FOREIGN KEY (\`id_user\`) REFERENCES \`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`role\` ADD \`id_role\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`role\` ADD PRIMARY KEY (\`id_role\`)`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_727c6adbaaf3de41e0c0c43cdcf\` FOREIGN KEY (\`id_role\`) REFERENCES \`role\`(\`id_role\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`id_project\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD PRIMARY KEY (\`id_project\`)`);
        await queryRunner.query(`ALTER TABLE \`sprint_project_project\` ADD CONSTRAINT \`FK_760e6763fbdd182f9f2d2c4af6e\` FOREIGN KEY (\`projectIdProject\`) REFERENCES \`project\`(\`id_project\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`team\` ADD CONSTRAINT \`FK_277a6a8112ef5205aef3c82da77\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_user\` ADD CONSTRAINT \`FK_22a73427988dd82f746f72f01de\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`criteria_project\` ADD CONSTRAINT \`FK_9c105e563ed31a2364fb3aa8571\` FOREIGN KEY (\`id_project\`) REFERENCES \`project\`(\`id_project\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}