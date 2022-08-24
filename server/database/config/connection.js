const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL } = process.env;

module.exports = new Pool({
  connectionString: DB_URL,
  ssl: false,
});
