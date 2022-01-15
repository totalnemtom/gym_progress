import { GetAllWeights, Weight } from '../models/weights';

export const WeightService = {
  async getAll(): Promise<GetAllWeights> {
    let weights;
    return (weights = { weights: await Weight.getAll() });
  },
};
