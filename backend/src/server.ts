import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from './routes/authenticationRoutes';
import userRouter from './routes/userRoutes';
import chatRouter from './routes/chatRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/chat-haven');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
// Define your routes here

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/chat', chatRouter)


// Start the server
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
