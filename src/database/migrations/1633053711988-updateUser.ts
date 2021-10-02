import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUser1633053711988 implements MigrationInterface {
    name = 'updateUser1633053711988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` ADD UNIQUE INDEX \`IDX_71fdad8489d3d818ec393e6eb1\` (\`document\`)`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` DROP INDEX \`IDX_71fdad8489d3d818ec393e6eb1\``);
    }

}
