import * as Knex from 'knex';

const knexConfig = require('../../knexfile');

export const databaseProvider = {
  provide: 'KnexConnection',
  useFactory: async ()=> {
    return Knex(knexConfig);
  },
};