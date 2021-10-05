import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserRole1633294174016 implements MigrationInterface {
    name = 'createUserRole1633294174016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`role\` (\`id_role\` char(36) NOT NULL, \`roleName\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id_role\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pacer\`.\`user_role\` (\`id_user_role\` char(36) NOT NULL, \`idRole\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id_user\` char(36) NOT NULL, PRIMARY KEY (\`id_user_role\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` ADD CONSTRAINT \`FK_d371b8893cffc547b0f103207d8\` FOREIGN KEY (\`id_user\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`user_role\` DROP FOREIGN KEY \`FK_d371b8893cffc547b0f103207d8\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`user_role\``);
        await queryRunner.query(`DROP TABLE \`pacer\`.\`role\``);
    }

}
