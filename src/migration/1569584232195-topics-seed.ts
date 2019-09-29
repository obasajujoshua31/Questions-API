import { MigrationInterface, QueryRunner } from "typeorm";
import * as path from "path";
import * as fs from "fs";

const topicsSql = fs
  .readFileSync(path.join(__dirname, "../sql/topics.sql"))
  .toString();

export class topicsSeed1569584232195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(topicsSql);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DROP TABLE IF EXISTS topics CASCADE ");
  }
}
