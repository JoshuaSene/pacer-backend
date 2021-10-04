import {MigrationInterface, QueryRunner} from "typeorm";

export class fixFKRoles1633298312854 implements MigrationInterface {
    name = 'fixFKRoles1633298312854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` CHANGE \`idRole\` \`id_role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD \`id_role\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD CONSTRAINT \`FK_727c6adbaaf3de41e0c0c43cdcf\` FOREIGN KEY (\`id_role\`) REFERENCES \`pacer\`.\`role\`(\`id_role\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP FOREIGN KEY \`FK_727c6adbaaf3de41e0c0c43cdcf\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP COLUMN \`id_role\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD \`id_role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` CHANGE \`id_role\` \`idRole\` varchar(255) NOT NULL`);
    }

}
