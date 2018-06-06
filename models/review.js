const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String, //this will show the user's name so people know who wrote it
    review: String,
    title: String,
    author: String
//title and author to connect review to book
});

const Review = mongoose.model('Reviews', userSchema);

module.exports = Review;
