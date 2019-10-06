import { Router } from 'express';
import { index, show } from '../controllers/subjects.controller';

const router: Router = Router();

router.get('/', index);
router.get('/:id(\\d+)', show);

export default router;
