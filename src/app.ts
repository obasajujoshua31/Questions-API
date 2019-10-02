import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import router from './routes';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

app.use('/api/v1', router);

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  next({status: 404, message: 'The requested resource does not exist'});
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ error: err.message || 'Something went wrong.'});
});

export default app;
