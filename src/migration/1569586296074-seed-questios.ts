import { MigrationInterface, QueryRunner } from "typeorm";
import * as path from "path";
import * as fs from "fs";

const questionSql = fs
  .readFileSync(path.join(__dirname, "../sql/questions.sql"))
  .toString();

export class seedQuestios1569586296074 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(questionSql);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE IF EXISTS questions CASCADE");
  }
}
