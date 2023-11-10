import mongoose, { Schema, Document, Model } from 'mongoose';

interface IChat extends Document {
  participants_ids: string[];
  created_at: Date;
  updated_at: Date;
  message_count: number;
  messages: string[];
}

const chatSchema: Schema<IChat> = new Schema<IChat>({
  participants_ids: {
    type: [{
      type: String,
      required: true,
    }],
    validate: {
      validator: function (participants: string[]) {
        return participants.length === 2;
      },
      message: 'A chat must have exactly 2 participants.',
    }
  },
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
  messages: [{
    type: mongoose.Schema.Types.ObjectId
  }]
});

const Chat: Model<IChat> = mongoose.model<IChat>('Chat', chatSchema);

export default Chat;
