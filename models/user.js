//first import mongoose
// then define schema in new mongoose.Schema({});
//then tell mongoose that this is our collection by the name you specify in mongoose.model()
//export model
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const userSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: { 
      type: String,
      required: true
  },
  name: {
      type: String,
      required: true
  }
}, {
  // for created-at and updated-at
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
