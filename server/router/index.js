const router = require('express').Router();

const { postHandler, getCommentData ,postCommentsController, getDataController} = require('../controllers');
// const getDataController = require('../controllers/getData');

router.get('/posts', getDataController);
router.post('/post', postHandler);
router.get('/getComment/:id', getCommentData);
router.post('/comments', postCommentsController);

module.exports = router;
