import express, { Response } from 'express';
import { weightController } from '../controllers/weightsController';

const router = express.Router();

router.use(express.json());

router.get('/', (_, res: Response) => {
  res.status(200).json({ message: 'hello' });
});

router.get('/weights', weightController.getAll);

export default router;
