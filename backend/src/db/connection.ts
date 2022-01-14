import mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  insecureAuth: true,
});

export const db = {
  query(query: string, values?: Array<unknown>): Promise<unknown> {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve({ results, fields });
        }
      });
    });
  },
};
