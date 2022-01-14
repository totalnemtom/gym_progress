import express, { Application } from 'express';
import { api } from './routes';
import errorHandler from '../middlewares/errorHandler';

const app: Application = express();

app.use('/api', api);

app.use(errorHandler);

export default app;
