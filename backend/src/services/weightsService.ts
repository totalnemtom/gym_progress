import { GetAllWeights, Weight } from '../models/weights';

export const getAllWeights = async (): Promise<GetAllWeights> => ({
  weights: await Weight.getAll(),
});
