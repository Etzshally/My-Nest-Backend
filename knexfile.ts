module.exports = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'next_test',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
  };