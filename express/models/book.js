//This covers the image and summary of the book

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  // bookID: String,
  bookCover: String,
  bookTitle: {
    type: String,
    required: true
  },
  bookAuthor: {
    type: String,
    required: true
  },
  bookSummary: String
});

const Book = mongoose.model('book', userSchema);

//accepting a string and putting that in the src attribute
//may not need bookID
