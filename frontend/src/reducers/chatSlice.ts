import {createSlice } from '@reduxjs/toolkit'

export const chatListSlice = createSlice({
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
})


export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        participents: [],
        messages: [],
        lastMessage: null,
        isGroupChat: false,
        chatName: null,
    },
    reducers: {
        INITIALIZE_CHAT: (state, action) =>{
            
        },

    }
})