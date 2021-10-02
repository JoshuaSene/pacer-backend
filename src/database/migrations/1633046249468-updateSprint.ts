import {MigrationInterface, QueryRunner} from "typeorm";

export class updateSprint1633046249468 implements MigrationInterface {
    name = 'updateSprint1633046249468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`sprint_project_project\` (\`sprintIdSprint\` char(36) NOT NULL, \`projectIdProject\` char(36) NOT NULL, INDEX \`IDX_8818322e0eb65548f4cf6763ba\` (\`sprintIdSprint\`), INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` (\`projectIdProject\`), PRIMARY KEY (\`sprintIdSprint\`, \`projectIdProject\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint\` ADD \`id_project\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` ADD CONSTRAINT \`FK_8818322e0eb65548f4cf6763ba2\` FOREIGN KEY (\`sprintIdSprint\`) REFERENCES \`pacer\`.\`sprint\`(\`id_sprint\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` ADD CONSTRAINT \`FK_760e6763fbdd182f9f2d2c4af6e\` FOREIGN KEY (\`projectIdProject\`) REFERENCES \`pacer\`.\`project\`(\`id_project\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` DROP FOREIGN KEY \`FK_760e6763fbdd182f9f2d2c4af6e\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint_project_project\` DROP FOREIGN KEY \`FK_8818322e0eb65548f4cf6763ba2\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`sprint\` DROP COLUMN \`id_project\``);
        await queryRunner.query(`DROP INDEX \`IDX_760e6763fbdd182f9f2d2c4af6\` ON \`pacer\`.\`sprint_project_project\``);
        await queryRunner.query(`DROP INDEX \`IDX_8818322e0eb65548f4cf6763ba\` ON \`pacer\`.\`sprint_project_project\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`sprint_project_project\``);
    }

}
