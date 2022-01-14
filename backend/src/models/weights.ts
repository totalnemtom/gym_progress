import { db } from '../db/connection';

interface Weight {
  id: number;
  weight: number;
  machineId: number;
}

interface WeightSQLResult {
  results: Weight[];
  fields: unknown;
}

export interface GetAllWeights {
  weights: Weight[];
}

export const Weight = {
  getAll: async (): Promise<Weight[]> => {
    const query = 'SELECT * FROM weights';
    const result = (await db.query(query)) as WeightSQLResult;
    return result.results;
  },
};
