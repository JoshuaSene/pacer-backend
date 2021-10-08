import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatingUser1633650627242 implements MigrationInterface {
    name = 'UpdatingUser1633650627242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`rule\` \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` ADD \`role\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` DROP COLUMN \`role\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` ADD \`role\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`role\` \`rule\` varchar(255) NOT NULL`);
    }

}
