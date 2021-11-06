import {MigrationInterface, QueryRunner} from "typeorm";

export class login1635545920323 implements MigrationInterface {
    name = 'login1635545920323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` DROP COLUMN \`password\``);
    }

}
