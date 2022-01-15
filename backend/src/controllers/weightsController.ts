import { Request, Response, NextFunction } from 'express';
import HttpException from '../../exceptions/httpException';
import { weightService } from '../services';

export const weightController = {
  async getAll(_: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const weights = await weightService.getAll();
      if (weights) res.sendStatus(200).json(weights);
    } catch (err: any) {
      next(new HttpException(err.satus, err.message));
    }
  },
};
