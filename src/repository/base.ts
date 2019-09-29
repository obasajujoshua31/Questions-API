import { getManager } from "typeorm";

class BaseRepository {
  private entity;
  constructor(entity: any) {
    this.entity = entity;
  }

  private getRepo() {
    return getManager().getRepository(this.entity);
  }
  getAll(id: number) {
    return this.getRepo().findOne({
      where: {
        id,
      },
      join: {
        alias: "subject",
        leftJoinAndSelect: {
          topics: "subject.topics",
          questions: "topics.questions",
          options: "questions.options",
        },
      },
    });
  }

  getById(id: bigint) {
    return this.getRepo().findOne(id);
  }
}

export default BaseRepository;
