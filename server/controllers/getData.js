
const getData = require('../database/queries/getData');
const {join} = require('path')
const getDataController=(req, res) => {
        getData()
          .then((data) => res.json(data.rows))
          .catch((err) => res.status(500).json({ msg: 'server error' }));
      }

      module.exports= getDataController
