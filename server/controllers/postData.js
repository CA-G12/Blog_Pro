const { post } = require('../database/queries');

const postHandler = (req, res) => {
  const { category, image, content } = req.body;
  post({ category, image, content }).then((data) => {
    res.json({
      data: data.rows[0],
    });
  });
};

module.exports = postHandler;
