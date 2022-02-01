import { WeightsController } from '../index';
import { weightService } from '../../services/index';
import httpMocks from 'node-mocks-http';
import {
  getAllMockResponse,
  getByIdMockResponse,
  weightToDeleteMock,
  weightServiceGetAllMock,
  weightServiceGetByIdMock,
  weightServiceRemoveMock,
} from './mocks/weight.mock';

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
    weightServiceGetByIdMock.mockResolvedValue(getByIdMockResponse as never);
    await WeightsController.getById(req, res, next);
    expect(weightService.getById).toBeCalled();
  });
  it('should return 200 response code', async () => {
    await WeightsController.getById(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return getByIdMockResponse', async () => {
    weightServiceGetByIdMock.mockResolvedValue(getByIdMockResponse as never);
    await WeightsController.getById(req, res, next);
    const data = res._getJSONData();
    expect(data).toStrictEqual(getByIdMockResponse);
  });
});

describe('weightsController.removeWeight', () => {
  it('should call weightService.getById', async () => {
    weightServiceRemoveMock.mockResolvedValue(weightToDeleteMock as never);
    await WeightsController.removeWeight(req, res, next);
    expect(weightService.deleteWeight).toBeCalled();
  });
  it('should return 200 response code', async () => {
    await WeightsController.removeWeight(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it('should return getByIdMockResponse', async () => {
    weightServiceRemoveMock.mockResolvedValue(weightToDeleteMock as never);
    await WeightsController.removeWeight(req, res, next);
    const data = res._getJSONData();
    expect(data).toStrictEqual(weightToDeleteMock);
  });
});
