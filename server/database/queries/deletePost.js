const connection = require('../config/connection');

const deletePostHandler = (id) => connection.query('delete from posts where posts.id = $1', [id]);

module.exports = deletePostHandler;
