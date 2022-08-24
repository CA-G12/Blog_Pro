const router = require('express').Router();

const {
  postHandler, getCommentData, postCommentsController, getDataController, deletePost,
} = require('../controllers');

router.get('/posts', getDataController);
router.post('/post', postHandler);
router.get('/getComment/:id', getCommentData);
router.post('/comments', postCommentsController);
router.delete('/delete', deletePost);
module.exports = router;
