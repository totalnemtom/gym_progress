import { db } from '../db/connection';

export interface WeightParams {
  id: number;
  weight: number;
  machineId: number;
}

interface WeightSQLResult {
  results: WeightParams[];
  fields: unknown;
}

export interface GetAllWeights {
  weights: WeightParams[];
}

export interface WeightToAddResult {
  results: {
    insertId: number;
  };
  fields: unknown[];
}

export interface WeightToDelete {
  results: {
    deleteId: number;
  };
  fields: unknown[];
}

export const Weight = {
  getAll: async (): Promise<WeightParams[]> => {
    const query = 'SELECT * FROM weights';
    const result = (await db.query(query)) as WeightSQLResult;
    return result.results;
  },

  getById: async ({
    weightId,
  }: {
    weightId: number;
  }): Promise<WeightParams> => {
    const query = 'SELECT * FROM weights WHERE id = ?';
    const weight = (await db.query(query, [weightId])) as WeightSQLResult;
    return weight.results[0];
  },

  addWeight: async ({
    weight,
    machineId,
  }: {
    weight: number;
    machineId: number;
  }): Promise<WeightToAddResult> => {
    const query = 'INSERT INTO weights (weight, machineid) VALUES (?, ?)';
    const weightToAdd = (await db.query(query, [
      weight,
      machineId,
    ])) as WeightToAddResult;
    return weightToAdd;
  },

  removeWeight: async ({
    weightId,
  }: {
    weightId: number;
  }): Promise<WeightToDelete> => {
    const query = 'DELETE FROM weights WHERE id = ?';
    const weightToDelete = (await db.query(query, [
      weightId,
    ])) as WeightToDelete;
    return weightToDelete;
  },
};
