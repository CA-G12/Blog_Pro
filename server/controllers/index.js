const postHandler = require('./postData');
const getCommentData = require('./getComment');
const postCommentsController = require('./postComment');
const getDataController = require('./getData');
const deletePost = require('./deletePost');

module.exports = {
  postHandler, getCommentData, postCommentsController, getDataController, deletePost,
};
