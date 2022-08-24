const router = require('express').Router();

const { postHandler, getCommentData } = require('../controllers');
const getDataController = require('../controllers/getData');

router.get('/posts', getDataController);
router.post('/post', postHandler);
router.get('/getCommit', getCommentData);
module.exports = router;
