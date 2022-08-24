const connection = require('../config/connection');

const getComment = (id) => connection.query('select * from comments WHERE id = $1', [id]);

module.exports = getComment;
