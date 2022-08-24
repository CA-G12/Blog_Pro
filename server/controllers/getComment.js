const { getComment } = require('../database/queries/index');

const getCommentData = (req, res) => {
  const {id} = req.params;
  getComment(id).then((data) => res.json(data.rows));
};
module.exports = getCommentData;
