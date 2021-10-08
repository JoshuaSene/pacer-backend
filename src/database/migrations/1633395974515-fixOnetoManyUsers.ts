import {MigrationInterface, QueryRunner} from "typeorm";

export class fixOnetoManyUsers1633395974515 implements MigrationInterface {
    name = 'fixOnetoManyUsers1633395974515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_evaluator\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_evaluator\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_evaluated\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_evaluated\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_da249ffc61a16614dd6cbc04199\` FOREIGN KEY (\`id_evaluator\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD CONSTRAINT \`FK_dbf4c048870760364664e345fd3\` FOREIGN KEY (\`id_evaluated\`) REFERENCES \`pacer\`.\`user\`(\`id_user\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_dbf4c048870760364664e345fd3\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP FOREIGN KEY \`FK_da249ffc61a16614dd6cbc04199\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_evaluated\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_evaluated\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` DROP COLUMN \`id_evaluator\``);
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` ADD \`id_evaluator\` varchar(255) NOT NULL`);
    }

}
