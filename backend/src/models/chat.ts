import mongoose, { Schema, Document, Model } from 'mongoose';

interface IChat extends Document {
  chatId: mongoose.Schema.Types.ObjectId;
  participants_ids: mongoose.Schema.Types.ObjectId[];
  created_at: Date;
  updated_at: Date;
  message_count: number;
}

const chatSchema: Schema<IChat> = new Schema<IChat>({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  participants_ids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: function (participants: any[]) {
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

const Chat: Model<IChat> = mongoose.model<IChat>('Chat', chatSchema);

export default Chat;
