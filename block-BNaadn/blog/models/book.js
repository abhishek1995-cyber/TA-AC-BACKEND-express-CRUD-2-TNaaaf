var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  bookSchema = new Schema({
    title: String,
    summary: String,
    pages: Number,
    publication: String,
    author:{type: mongoose.Schema.Types.ObjectId, ref:"Author",required:true},
    category:{type: Schema.Types.ObjectId, ref:"Category",required:true}
},{timestamps:true});

module.exports = mongoose.model('Book', bookSchema);