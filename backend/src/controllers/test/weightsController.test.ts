import { WeightsController } from '../index';
import { weightService } from '../../services/index';
import httpMocks from 'node-mocks-http';
import { getAllMockResponse, getByIdMockResponse } from './mocks/weight.mock';
import { GetAllWeights, WeightParams } from '../../models/weights';

const weightServiceGetAllMock = (weightService.getAll =
  jest.fn()) as jest.Mock<GetAllWeights>;
const weightServiceGetById = (weightService.getById =
  jest.fn()) as jest.Mock<WeightParams>;
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
    weightServiceGetAllMock.mockResolvedValue(getAllMockResponse as never);
    await WeightsController.getAll(req, res, next);
    expect(weightService.getAll).toBeCalled();
  });
  it('should return 200 response code', async () => {
    await WeightsController.getAll(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return geAllMockResponse', async () => {
    weightServiceGetAllMock.mockResolvedValue(getAllMockResponse as never);
    await WeightsController.getAll(req, res, next);
    const data = res._getJSONData();
    expect(data).toStrictEqual(getAllMockResponse);
  });
});
describe('weightsController.getById', () => {
  it('should call weightService.getById', async () => {
    weightServiceGetById.mockResolvedValue(getByIdMockResponse as never);
    await WeightsController.getById(req, res, next);
    expect(weightService.getById).toBeCalled();
  });
  it('should return 200 response code', async () => {
    await WeightsController.getById(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return geAllMockResponse', async () => {
    weightServiceGetById.mockResolvedValue(getByIdMockResponse as never);
    await WeightsController.getById(req, res, next);
    const data = res._getJSONData();
    expect(data).toStrictEqual(getByIdMockResponse);
  });
});
