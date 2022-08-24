const connection = require('../config/connection');

const getData = () => connection.query('select * from posts');

module.exports = getData;
