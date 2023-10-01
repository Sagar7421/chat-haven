import mongoose, { Schema, Document, Model, Types } from 'mongoose';

interface IGroupChat extends Document {
  groupChatId: mongoose.Schema.Types.ObjectId;
  admin_id: mongoose.Schema.Types.ObjectId;
  participant_ids: mongoose.Schema.Types.ObjectId[];
  created_at: Date;
  updated_at: Date;
  message_count: number;
  description?: string;
}

const groupChatSchema: Schema<IGroupChat> = new Schema<IGroupChat>({
  groupChatId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

const GroupChat: Model<IGroupChat> = mongoose.model<IGroupChat>('GroupChat', groupChatSchema);

export default GroupChat;
