import {
  WeightParams,
  GetAllWeights,
  Weight,
  WeightToAddResult,
  WeightToDelete,
} from '../models/weights';

export const WeightService = {
  async getAll(): Promise<GetAllWeights> {
    let weights: GetAllWeights;
    return (weights = { weights: await Weight.getAll() });
  },
  async getById({ weightId }: { weightId: number }): Promise<WeightParams> {
    let weight: WeightParams;
    return (weight = await Weight.getById({ weightId }));
  },
  async addWeight({
    weight,
    machineId,
  }: {
    weight: number;
    machineId: number;
  }): Promise<WeightToAddResult> {
    let weightToAdd: WeightToAddResult;
    return (weightToAdd = await Weight.addWeight({ weight, machineId }));
  },
  async deleteWeight({
    weightId,
  }: {
    weightId: number;
  }): Promise<WeightToDelete> {
    let weightToDelete: WeightToDelete;
    return (weightToDelete = await Weight.removeWeight({ weightId }));
  },
};
