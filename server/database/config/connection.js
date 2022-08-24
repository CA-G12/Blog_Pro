const { Pool } = require('pg');
require('dotenv').config();

const { DB_URL, TEST_DB_URL, DATABASE_URL } = process.env;

let dbUrl = '';

if (process.env.NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = DB_URL;
} else if (process.env.NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else {
  throw new Error('there`s no database');
}

module.exports = new Pool({
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized:false;
  },
});
