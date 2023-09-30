const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  chat_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  participants_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
        validator: function (participants) {
          return participants.length === 2;
        },
        message: 'A chat must have exactly 2 participants.',
      },
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  message_count: {
    type: Number,
    default: 0,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;