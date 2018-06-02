//this covers user, id, reviews

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  userID: String,
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);
