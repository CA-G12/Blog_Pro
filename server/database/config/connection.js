const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL, TEST_DB_URL, DATABASE_URL, NODE_ENV } = process.env;

let dbUrl = '';

if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else if (NODE_ENV === 'development') {
  dbUrl = DB_URL;
} else if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else {
  throw new Error('there`s no database');
}

module.exports = new Pool({
  connectionString: dbUrl,
  ssl:  NODE_ENV === 'production'
  ? {
    rejectUnauthorized: false,
  }
  : false,
});
