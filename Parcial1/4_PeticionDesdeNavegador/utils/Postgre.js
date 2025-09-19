const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movies',
  password: 'Adda03!',
  port: 5432, // Puerto por defecto de PostgreSQL
});

module.exports = pool;