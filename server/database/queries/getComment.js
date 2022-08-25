const connection = require('../config/connection');

const getComment = (id) => connection.query('select * from comments WHERE posts_id = $1', [id]);

module.exports = getComment;
