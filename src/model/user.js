const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: [true, 'User must have an email'],
        unique: true,
        trim: true
      },
      password: {
        type: String,
        required: [true, 'Password is required'],
        // select: false
      },
      firstName: {
        type: String,
        required: [true, 'User must have a first name'],
        trim: true
      },
      lastName: {
        type: String,
        required: [true, 'User must have a last name'],
        trim: true
      },
      notifications: {
        type: Array
      },
      score: {
        type: Number
      },
      time : {
        type : Date, 
        default: Date.now 
      },
    },
  );


  
  module.exports = mongoose.model('User', UserSchema);