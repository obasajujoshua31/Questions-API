import BiologyRoutes from "./biology";
import IRoute from "./route.interface";

const {
  path: biologyPath,
  router: biologyRouter,
} = new BiologyRoutes().initializeControllers();

const routes: IRoute[] = [
  {
    path: biologyPath,
    router: biologyRouter,
  },
];

export default routes;
