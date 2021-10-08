import {MigrationInterface, QueryRunner} from "typeorm";

export class valueDefaultOnUSer1633389139900 implements MigrationInterface {
    name = 'valueDefaultOnUSer1633389139900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`sn_ativo\` \`sn_ativo\` varchar(1) NOT NULL DEFAULT 'S'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user\` CHANGE \`sn_ativo\` \`sn_ativo\` varchar(1) NOT NULL`);
    }

}
