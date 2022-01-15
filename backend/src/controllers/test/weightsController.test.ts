import { WeightsController } from '../index';
import { weightService } from '../../services/index';
import httpMocks from 'node-mocks-http';
import { getAllMockResponse } from './mocks/weight.mock';
import { GetAllWeights } from '../../models/weights';

let req: any, res: any, next: any;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});
describe('weightsController.getAll', () => {
  it('should have a getAll function', () => {
    expect(typeof WeightsController.getAll).toBe('function');
  });
  it('should call weightService.getAll', async () => {
    const weightServiceMock = (weightService.getAll = jest.fn());
    const mockedWeightService = weightServiceMock as jest.Mock<GetAllWeights>;
    mockedWeightService.mockResolvedValue(getAllMockResponse as never);
    await WeightsController.getAll(req, res, next);
    expect(weightService.getAll).toBeCalled();
  });
  it('should return 200 response code', async () => {
    await WeightsController.getAll(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return JSON', async () => {
    const weightServiceMock = (weightService.getAll = jest.fn());
    const mockedWeightService = weightServiceMock as jest.Mock<GetAllWeights>;
    mockedWeightService.mockResolvedValue(getAllMockResponse as never);
    await WeightsController.getAll(req, res, next);
    expect(res._isJSON()).toBeTruthy();
  });
});
