const { deletePostHandler } = require('../database/queries');

const deletePost = (req, res) => {
  deletePostHandler(req.body.id).then((data) => res.json(data));
};
module.exports = deletePost;
