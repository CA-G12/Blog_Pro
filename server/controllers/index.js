const postHandler = require('./postData');
const getCommentData = require('./getComment');
const postCommentsController=require('./postComment')
const getDataController= require('./getData')
module.exports = {
  postHandler, getCommentData,postCommentsController, getDataController
};
