const { post } = require('../database/queries');

const postHandler = (req, res) => {
  const { category, image, content } = req.body;
  post({ category, image, content });
};

module.exports = postHandler;
