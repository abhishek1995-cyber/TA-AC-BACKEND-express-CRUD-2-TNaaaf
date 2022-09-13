var express = require('express');
var router = express.Router();
var Article = require('../model/article');
var Comment = require('../model/comment')

/* GET users listing. */
router.get('/new',(req,res)=>{
  res.render('addArticles');
});

router.get('/', function(req, res, next) {
  Article.find({},(err,article)=>{
    if(err) return next(err);
    res.render('articlesList',{article: article})
  })
});

router.post('/new',(req,res,next)=>{
  Article.create(req.body,(err,createdarticle)=>{
    if(err) return next(err);
    res.redirect('/articles')
  })
});
// router.get("/:id",(req,res,next)=>{
//   var id = req.params.id;
//   Article.findById(id,(err,article)=>{
//     if(err) return next(err);
//     res.render('articleDetails',{article:article})
//   })
// });
router.get("/:id",(req,res,next)=>{
  var id = req.params.id;
  Article.findById(id,(err,article)=>{
    if(err) return next(err);
    Comment.find({articleId: id},(err,comments)=>{
      res.render('articleDetails',{article, comments})
    })
    
  })
});


router.get('/:id/edit',(req,res,next)=>{
  var id = req.params.id;
  Article.findById(id,(err,article)=>{
    if(err) return next(err);
    res.render('editArticle',{article:article})
  })
});

router.post('/:id',(req,res,next)=>{
  var id = req.params.id;
  Article.findByIdAndUpdate(id, req.body,(err,updatedarticle)=>{
    if(err) return next(err);
    res.redirect('/articles/' + id)
  })
});

router.get('/:id/delete',(req,res,next)=>{
  var id = req.params.id;
  Article.findByIdAndDelete(id,(err,article)=>{
      if(err) return next(err);
      res.redirect("/articles")
  })
})
// add comment

router.post('/:id/comments',(req,res,next)=>{
  var id = req.params.id;
  req.body.articleId = id;
  Comment.create(req.body,(err,comment)=>{
    console.log(err,comment);
    if (err) return next(err);
    res.redirect('/articles/' + id)
  })
})


module.exports = router;
