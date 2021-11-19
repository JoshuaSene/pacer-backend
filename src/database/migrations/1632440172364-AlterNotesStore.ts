import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterNotesStore1632440172364 implements MigrationInterface {
    name = 'AlterNotesStore1632440172364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` CHANGE \`note\` \`note\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pacer\`.\`notes_store\` CHANGE \`note\` \`note\` int NOT NULL`);
    }

}