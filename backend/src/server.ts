import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createServer } from "http";
import { Server } from "socket.io";

import authRouter from './routes/authenticationRoutes';
import userRouter from './routes/userRoutes';
import chatRouter from './routes/chatRoutes';

import {createMessage} from './services/messageService';


const app = express();
const httpServer = createServer(app)

const io = new Server(httpServer, { cors: {
  origin: "http://localhost:3000"
} });

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

// Store users with their socketIds
const connectedUsers: { [userId: string]: string } = {}; 

// Websocket to handle two-way communications (messages and everything)
io.on("connection", (socket) => {
  console.log("New Connection!");
  console.log(socket.id);
  
  socket.on('register-user', (userId: string) => {
    connectedUsers[userId] = socket.id;
  })

  socket.on('disconnect', () => {
    console.log("Connection ended!");
  });

  socket.on("direct-message", (data) => {
    console.log("Direct Message Request Came")
    // Create a message object
    const {message, sender_id, chat_id, reciever_id} = data
    const ts = createMessage(message, sender_id, chat_id);

    // Send this message to reciever, get recieve_id in the message or find it ourself
    // Lets get it from message sender for now

    // Find the socket id for the corresponding reciever_id, send msg if found, else do nothing
    const recieverSocket = connectedUsers[reciever_id];
    if (recieverSocket){
      io.to(recieverSocket).emit("update-data", {type: "DIRECT_MSG_RECIEVE", payload: {content: message, from: sender_id, chat_id: chat_id, timestamp: ts}})
    }

    // Delete this, only for testing websockets
    const temp = socket.id;
    if(temp){
      console.log("sending back message! \n");
      io.to(temp).emit("update-data", {type: "DIRECT_MSG_RECIEVE", payload: {content: message, from: sender_id, chat_id: chat_id, timestamp: ts}})
    }
    else{
      console.log("temp not found!");
    }
    
  });

  socket.on('group-message', ()=> {
    console.log("Direct Message Request Came")
  });
}
);



// Start the server
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;
/*app.listen(port, () => {
  console.log(Server is running on port ${port});
}); */

httpServer.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});
