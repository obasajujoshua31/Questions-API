import { Router } from 'express';
import subjectRouter from './subjects.routes';

const router = Router();

router.use('/subjects', subjectRouter);

export default router;
