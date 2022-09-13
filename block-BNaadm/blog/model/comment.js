var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentschemna = new Schema({
     content:{type: String, required:true},
     articleId : {type: Schema.Types.ObjectId, ref: "Article", required: true}
},{timestamps:true});

module.exports = mongoose.model('Comment', commentschemna)