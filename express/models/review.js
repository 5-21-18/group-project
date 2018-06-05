//this covers the rating, review, time stamp and connects it to the user

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
  userID: String,
  date: { type: Date, default: Date.now },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  rating: Boolean
});

const Review = mongoose.model('review', userSchema);

//rating: Boolean. True for liked it, false for didn't like it?
