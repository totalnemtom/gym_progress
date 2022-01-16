import express, { Response } from 'express';
import { WeightsController } from '../controllers/index';
import cors from 'cors';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/', (_, res: Response) => {
  res.status(200).json({ message: 'hello' });
});

router.get('/weights', WeightsController.getAll);
router.get('/weights/:id', WeightsController.getById);
router.post('/weights', WeightsController.addWeight);
router.delete('/weights/:id', WeightsController.removeWeight);

export default router;
