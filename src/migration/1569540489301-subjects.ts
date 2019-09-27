import {
  MigrationInterface,
  QueryRunner,
  TableIndex,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class subjects1569540489301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "subjects",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
        ],
      }),
      true
    );
    await queryRunner.createIndex(
      "subjects",
      new TableIndex({
        name: "IDX_SUBJECT_NAME",
        columnNames: ["name"],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "topics",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.addColumn(
      "topics",
      new TableColumn({
        name: "subject_id",
        type: "int",
      })
    );
    await queryRunner.createForeignKey(
      "topics",
      new TableForeignKey({
        columnNames: ["subject_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "subjects",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createTable(
      new Table({
        name: "options",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "option",
            type: "varchar",
          },
          {
            name: "correct",
            type: "boolean",
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "question",
            type: "varchar",
          },
          {
            name: "source",
            type: "varchar",
          },
        ],
      }),
      true
    );

    await queryRunner.addColumn(
      "questions",
      new TableColumn({
        name: "topic_id",
        type: "int",
      })
    );
    await queryRunner.createForeignKey(
      "questions",
      new TableForeignKey({
        columnNames: ["topic_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "topics",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.addColumn(
      "options",
      new TableColumn({
        name: "question_id",
        type: "int",
      })
    );
    await queryRunner.createForeignKey(
      "options",
      new TableForeignKey({
        columnNames: ["question_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "questions",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const table = await queryRunner.getTable("topics");
    const foreignKey = table.foreignKeys.find(
      fk => fk.columnNames.indexOf("subject_id") !== -1
    );
    await queryRunner.dropForeignKey("topics", foreignKey);
    await queryRunner.dropColumn("topics", "subject_id");

    const table2 = await queryRunner.getTable("questions");
    const foreignKey2 = table2.foreignKeys.find(
      fk => fk.columnNames.indexOf("topic_id") !== -1
    );
    await queryRunner.dropForeignKey("questions", foreignKey2);
    await queryRunner.dropColumn("questions", "topic_id");

    const foreignKey3 = table2.foreignKeys.find(
      fk => fk.columnNames.indexOf("answer_id") !== -1
    );
    await queryRunner.dropForeignKey("questions", foreignKey3);
    await queryRunner.dropColumn("questions", "answer_id");

    const table4 = await queryRunner.getTable("options");
    const foreignKey4 = table4.foreignKeys.find(
      fk => fk.columnNames.indexOf("question_id") !== -1
    );
    await queryRunner.dropForeignKey("options", foreignKey4);
    await queryRunner.dropColumn("options", "question_id");

    await queryRunner.dropTable("answer");
    await queryRunner.dropIndex("subjects", "IDX_SUBJECT_NAME");
    await queryRunner.dropTable("subjects");
  }
}
