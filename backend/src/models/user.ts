import mongoose, { Schema, Document, Model, Types } from 'mongoose';

function generateUserId() {
  return new Types.ObjectId();
}

interface IUser extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  status?: string;
  friends: Types.ObjectId[];
  chatRooms: Types.ObjectId[];
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    unique: true,
    default: generateUserId,
    
  },
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
    // minlength: 6, // You can adjust the minimum password length as needed
  },
  status: {
    type: String,
    maxlength: 180,
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  chatRooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GroupChat',
  }]
  ,
});

// Create a User model from the schema
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
