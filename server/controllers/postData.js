const { post } = require('../database/queries');

const postHandler = (req, res) => {
  console.log('got a request')
  const { category, image, content } = req.body;
  post({ category, image, content }).then((data) => {
    res.json({
      data: data.rows[0],
    });
  });
};

module.exports = postHandler;
