var express = require('express');
var router = express.Router();
var Comment = require('../model/comment')

router.get('/:id/edit',(req,res)=>{
    var id = req.params.id;
    Comment.findById(id,(err,comment)=>{
        if(err) return next(err);
        res.render('updateComment',{comment})
    })
})
router.post('/:id',(req,res,next)=>{
 var id = req.params.id;
  Comment.findByIdAndUpdate(id,req.body,(err,updatedComment)=>{
    if(err) return next(err);
    res.redirect('/articles/' + updatedComment.articleId)
  })
});

router.get('/:id/delete',(req,res,next)=>{
    var commentid = req.params.id;
    Comment.findByIdAndRemove(commentid,(err,comment)=>{
        if(err) return next(err);
        res.redirect('/articles/' + comment.articleId)
    })
})


module.exports = router;