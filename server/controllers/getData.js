const getData = require('../database/queries/getData');

const getDataController = (req, res) => {
  getData()
    .then((data) => res.json(data.rows))
    .catch(() => res.status(500).json({ msg: 'server error' }));
};

module.exports = getDataController;
