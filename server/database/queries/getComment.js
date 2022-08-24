const connection = require('../config/connection');

const getComment = () => connection.query('select * from comments');

module.exports = getComment;
