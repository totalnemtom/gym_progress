import { weightService } from '../../../services/index';
import {
  GetAllWeights,
  WeightParams,
  WeightToDelete,
} from '../../../models/weights';

export const getAllMockResponse = {
  weights: [{ id: 1, weight: 140, machineid: 1 }],
};
export const getByIdMockResponse = {
  id: 1,
  weight: 140,
  machineId: 0,
};

export const weightToDeleteMock = {
  results: {
    deleteId: 1,
  },
  fields: [],
};

export const weightServiceGetAllMock = (weightService.getAll =
  jest.fn()) as jest.Mock<GetAllWeights>;
export const weightServiceGetByIdMock = (weightService.getById =
  jest.fn()) as jest.Mock<WeightParams>;
export const weightServiceRemoveMock = (weightService.deleteWeight =
  jest.fn()) as jest.Mock<WeightToDelete>;
