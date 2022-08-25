const connection = require('../config/connection');

const postComment = ({ comment, posts_id }) => {
  const sql = {
    text: 'insert into comments (comment, posts_id) values ($1,$2) returning *',
    values: [comment, posts_id],
  };
  return connection.query(sql);
};
module.exports = postComment;
