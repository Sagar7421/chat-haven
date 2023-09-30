const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    //minlength: 6, // You can adjust the minimum password length as needed
  },
  status:{
    type: String,
    maxlength: 180,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  chatRooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GroupChat'
  }]
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;