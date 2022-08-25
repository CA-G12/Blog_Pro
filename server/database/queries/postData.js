const connection = require('../config/connection');

const post = ({ category, image, content }) => connection.query(
  'INSERT INTO posts (category, content, image) values ($1 ,$2, $3) returning *',
  [category, content, image],
);

module.exports = post;
