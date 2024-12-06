import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStudentsTable1733482223316 implements MigrationInterface {
    name = 'CreateStudentsTable1733482223316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_3d8016e1cb58429474a3c041904" DEFAULT NEWSEQUENTIALID(), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "dateOfBirth" date NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
