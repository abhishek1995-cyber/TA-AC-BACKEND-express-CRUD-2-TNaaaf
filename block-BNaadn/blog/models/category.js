var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  categorySchema = new Schema({
  category:String,
  bookId:{type: Schema.Types.ObjectId, ref: "Book"}
},{timestamps:true});

module.exports = mongoose.model('Category', categorySchema);