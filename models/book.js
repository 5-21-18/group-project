const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: String,
    title: String,
    author: String,
    img: String, //will need to figure out how to let upload pictures
    summary: String,
    rating: Boolean,
    /* create a function that pushes rating into an array then
       loops through an array, +1 for true +0 for false,
       then divide by length of the array to receive the average, convert to percentage
       and post that to the view */
    published_year: Number,
    publisher: String
});

module.exports = Book = mongoose.model('Books', userSchema);