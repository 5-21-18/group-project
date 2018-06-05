//this covers user, id, reviews

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

onst userSchema = new Schema ({
  userID: String,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
