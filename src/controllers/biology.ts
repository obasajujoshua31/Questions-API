import { Subject } from "./../entity/subject.entity";
import BaseRepository from "../repository/base";
import Base from "./base";

const subjectRepo = new BaseRepository(Subject);

export default class BiologyController extends Base {
  public getAll() {
    return this.asyncFunction({
      handler: async (req, res) => {
        const allQuestions = await subjectRepo.getAll(1);
        return this.httpResponse({ res, code: 200, data: allQuestions });
      },
    });
  }
}
