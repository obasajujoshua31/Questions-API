import * as path from "path";
import * as fs from "fs";

const subjectSql = fs
  .readFileSync(path.join(__dirname, "../sql/subject.sql"))
  .toString();

import { MigrationInterface, QueryRunner } from "typeorm";

export class seed1569583251385 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(subjectSql);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE subjects IF EXISTS");
  }
}
