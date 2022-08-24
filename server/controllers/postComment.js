const {postComment}= require('../database/queries')

const postCommentsController=(req,res)=>{
const {comment, posts_id}= req.body
postComment({comment, posts_id}).then(data=> res.json(data.rows))
.catch(err=> console.log(err))

}

module.exports=postCommentsController