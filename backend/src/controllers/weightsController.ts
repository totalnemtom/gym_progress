import { Request, Response, NextFunction } from 'express';
import HttpException from '../../exceptions/httpException';
import { weightService } from '../services';
import { WeightService } from '../services/weightsService';

export const weightController = {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const weights = await weightService.getAll();
      console.log();
      if (weights) res.status(200).json(weights);
    } catch (err: any) {
      next(new HttpException(err.satus, err.message));
    }
  },
  async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const weightId = parseInt(req.params.id);
      const weight = await weightService.getById({ weightId });
      if (weight) res.status(200).json(weight);
    } catch (err: any) {
      next(new HttpException(err.satus, err.message));
    }
  },
  async addWeight(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const weight = parseInt(req.body.weight);
      const machineId = parseInt(req.body.machineId);
      //TODO: (!machineById)
      const weightToAdd = await weightService.addWeight({ weight, machineId });
      if (weightToAdd) res.status(200).json(weightToAdd);
    } catch (err: any) {
      next(new HttpException(err.satus, err.message));
    }
  },
  async removeWeight(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const weightId = parseInt(req.params.id);
      const weightToRemove = await weightService.deleteWeight({ weightId });
      if (weightToRemove) res.status(200).json(weightToRemove);
    } catch (err: any) {
      next(new HttpException(err.satus, err.message));
    }
  },
};
