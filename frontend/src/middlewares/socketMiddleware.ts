import { io } from "socket.io-client";
import {Middleware} from '@reduxjs/toolkit'
import { DIRECT_MSG_RECIEVE } from "../reducers/chatSlice";


/*const createWebsocket = () => {
    const socket = io("http://localhost:5001", {
        autoConnect: false
    })
    return socket;
} */

const socket =  io("http://localhost:5001", {
    autoConnect: false
});


// Now build the middleware to make calls
const socketMiddleware: Middleware = (store) => (next) => (action) => {

    switch (action.type) {

        case "auth/USER_LOGIN":
            socket.connect();
            console.log("socket connected")

            // Add more recieving conditions
            socket.on("update-data", (message: any) =>{
            store.dispatch(DIRECT_MSG_RECIEVE(message.payload));
            })

            console.log("can we reach here!")
            break;


        case "chatSlice/SEND_WEBSOCKET_MESSAGE":
          console.log("sending message");
          socket.emit("direct-message", action.payload);
          console.log("emitted");
          break;

        case "chatSlice/REGISTER_SOCKET":
          console.log("Registering socket");
          socket.emit("register-user", action.payload);
          break;
        default:
          break
      }
    

    return next(action);
  };



export default socketMiddleware;