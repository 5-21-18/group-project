const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    img: String, //will need to figure out how to let upload pictures
    summary: String
});

const Book = mongoose.model('Books', userSchema);

module.exports = Book;
