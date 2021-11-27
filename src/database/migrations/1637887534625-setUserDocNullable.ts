import {MigrationInterface, QueryRunner} from "typeorm";

export class setUserDocNullable1637887534625 implements MigrationInterface {
    name = 'setUserDocNullable1637887534625'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`document\` \`document\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP COLUMN \`optional\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD \`optional\` tinyint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` DROP COLUMN \`optional\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`project_user\` ADD \`optional\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`document\` \`document\` varchar(20) NOT NULL`);
    }

}
