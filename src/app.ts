import * as express from "express";
import "module-alias/register";
import "reflect-metadata";
import * as logger from "morgan";
import databaseConnection from "../database/connect";
import IRoute from "./routes/route.interface";

class App {
  public app: express.Application;
  public port: number;

  constructor(routes: IRoute[], port: number) {
    this.app = express();
    this.port = port;
    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger("dev"));
  }

  private initializeRoutes(routes: IRoute[]) {
    routes.forEach(route => {
      this.app.use(route.path, route.router);
    });
  }

  private async initializeDatabase() {
    await databaseConnection;
  }
  public start() {
    this.app.listen(this.port, (): void => {
      console.log("Server started at", this.port);
    });
  }
}

export default App;
