import BiologyController from "../controllers/biology";
import { Router } from "express";
import IRoute from "./route.interface";

const biologyController = new BiologyController();

export default class BiologyRoutes {
  private AllBiologyQuestions = "/";
  private router = Router();

  public initializeControllers(): IRoute {
    return {
      path: "/biology",
      router: this.initializeRouter(),
    };
  }

  private initializeRouter(): Router {
    return this.router.get(
      this.AllBiologyQuestions,
      biologyController.getAll()
    );
  }
}
