import {createSlice } from '@reduxjs/toolkit'
import { chat1, chatListInterface } from '../interfaces/interfaces'
import { getChatList } from './chatActions';

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState: {
        chats: [],
    } as chatListInterface,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getChatList.fulfilled, (state, action) => {
            for (const data of action.payload) {
                state.chats.push({chatUserName: data.username, chatUserId: data.user_id, chatId: data.chat_id});
            }
        });

    },
})


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
