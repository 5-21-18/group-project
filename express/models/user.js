//this covers user, role, id, reviews

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  userID: String,
  username: String,
  password: String,
  role: String
});

const User = mongoose.model('user', userSchema);
