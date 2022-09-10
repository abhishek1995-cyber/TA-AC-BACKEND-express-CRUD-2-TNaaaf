var mongoose = require('mongoose');
var schema = mongoose.Schema;

var articleschema = new schema({
    title:String,
    description: String,
    tags:[String],
    author:String,
    likes:Number
});

var Article = mongoose.model('Article',articleschema);
module.exports = Article;