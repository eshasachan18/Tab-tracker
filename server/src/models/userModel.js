const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true,'tell your name']
      },
      email: {
        type: String,
        required: [true,'Write your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail,'please provide a valid email']
      },
      password: {
          type: String,
          required: [true,'password is mandatory']
      },
      passwordConfirm: {
        type: String,
        required: [true,'please confirm your password']
      }
    },
    { collection: 'users' }
  );
  
  const User= mongoose.model('user',userSchema);
  module.exports = User;