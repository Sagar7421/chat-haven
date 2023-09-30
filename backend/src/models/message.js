const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the sender
    required: true,
  },
  chat_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  isGroupChatMessage: {
    type: Boolean,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
