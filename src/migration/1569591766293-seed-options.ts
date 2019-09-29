import { MigrationInterface, QueryRunner } from "typeorm";
import * as path from "path";
import * as fs from "fs";

const optionSql = fs
  .readFileSync(path.join(__dirname, "../sql/options.sql"))
  .toString();

export class seedOptions1569591766293 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(optionSql);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE IF EXISTS options CASCADE");
  }
}
