const { getComment } = require('../database/queries/index');

const getCommentData = (req, res) => {
  getComment().then((data) => res.json(data));
};
module.exports = getCommentData;
