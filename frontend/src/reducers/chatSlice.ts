import {createSlice } from '@reduxjs/toolkit'
import { currentChatInterface, chatListInterface, messagesInterface } from '../interfaces/interfaces'
import { getChatList, initializeChat } from './chatActions';

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState: {
        chats: [],
    } as chatListInterface,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getChatList.fulfilled, (state, action) => {
            state.chats = [];
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
    } as currentChatInterface,
    reducers: {
        SEND_WEBSOCKET_MESSAGE: (state, action) =>{
           console.log("in chat slice"); 
        },
        DIRECT_MSG_RECIEVE: (state, action) => {
            console.log("direct message received!");
            console.log(action.payload);
            //state.messages.push("a new message, figure out what to put there");
        },
        REGISTER_SOCKET: (state, action) =>{
            console.log("in chat slice register");
        }

    },
    extraReducers: (builder) => {
        builder.addCase(initializeChat.fulfilled, (state, action) => {
            console.log("in init chat!");
            console.log(action);
            state.participents = action.payload.participents;
            state.lastMessage = action.payload.lastMessage;
            state.isGroupChat = action.payload.isGroupChat;
            state.messages = [];

            for (const msg of action.payload.messages){
                const t: messagesInterface = {timestamp: msg.timestamp, content: msg.content, sender_id: msg.sender_id, message_id: msg.message_id}
                state.messages.push(t);
            }
        })
    }

})

export const {SEND_WEBSOCKET_MESSAGE, DIRECT_MSG_RECIEVE, REGISTER_SOCKET} = chatSlice.actions;
