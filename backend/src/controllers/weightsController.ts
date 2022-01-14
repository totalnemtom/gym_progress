import { Request, Response, NextFunction } from 'express';
import HttpException from '../../exceptions/httpException';
import { weightService } from '../services';

export const weightController = {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const weights = await weightService.getAllWeights().catch(err => {
      next(new HttpException(err.satus, err.message));
    });
    if (weights) res.status(200).json(weights);
  },
};
