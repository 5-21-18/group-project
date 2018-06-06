const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: String, //this will show the user's name so people know who wrote it
    review: String,
    rating: Boolean /* create a function that pushes rating into an array then
    loops through an array, +1 for true +0 for false,
    then divide by length of the array to receive the average, convert to percentage
    and post that to the view */
});

const Review = mongoose.model('Reviews', userSchema);

module.exports = Review;
