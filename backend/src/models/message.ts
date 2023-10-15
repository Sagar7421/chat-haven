import mongoose, { Schema, Document, Model, Types } from 'mongoose';

interface IMessage extends Document {
  sender_id: mongoose.Schema.Types.ObjectId;
  chat_id: mongoose.Schema.Types.ObjectId;
  isGroupChatMessage: boolean;
  timestamp: Date;
  content: string;
}

const messageSchema: Schema<IMessage> = new Schema<IMessage>({
  sender_id: {
    type: Types.ObjectId,
    ref: 'User', // Reference to the User model for the sender
    required: true,
  },
  chat_id: {
    type: Types.ObjectId,
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

const Message: Model<IMessage> = mongoose.model<IMessage>('Message', messageSchema);

export default Message;
