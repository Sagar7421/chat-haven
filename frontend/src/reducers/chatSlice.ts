import {createSlice } from '@reduxjs/toolkit'
import { chat1 } from '../interfaces/interfaces'

/*export const chatListSlice = createSlice({
    name: 'chatList',
    initialState: {

    },
    reducers: {

    }
})

export const groupChatListSlice = createSlice({
    name: 'groupChatList',
    initialState: {

    },
    reducers: {

    }
}) */


export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        participents: [],
        messages: [],
        lastMessage: "",
        isGroupChat: false,
        chatName: "",
    } as chat1,
    reducers: {
        INITIALIZE_CHAT: (state, action) =>{
            
        },
        SEND_WEBSOCKET_MESSAGE: (state, action) =>{
           console.log("in chat slice"); 
        },
        DIRECT_MSG_RECIEVE: (state, action) => {
            console.log("direct message received!");
            console.log(action.payload);
            state.messages.push("a new message, figure out what to put there");
        },
        REGISTER_SOCKET: (state, action) =>{
            console.log("in chat slice register");
        }

    }

})

export const {SEND_WEBSOCKET_MESSAGE, DIRECT_MSG_RECIEVE, REGISTER_SOCKET} = chatSlice.actions;