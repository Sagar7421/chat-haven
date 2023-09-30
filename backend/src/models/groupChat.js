const mongoose = require('mongoose');

const groupChatSchema = new mongoose.Schema({
  groupChatId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  admin_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
  },
  participant_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for participant IDs
    required: true,
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
  description: {
    type: String,
    maxlength: 512, // You can adjust the maximum length as needed
  },
});

const GroupChat = mongoose.model('GroupChat', groupChatSchema);

module.exports = GroupChat;