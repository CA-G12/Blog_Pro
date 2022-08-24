const router = require('express').Router();

const { postHandler } = require('../controllers');
const getDataController = require('../controllers/getData');

router.get('/posts', getDataController);
router.post('/post', postHandler);

module.exports = router;
