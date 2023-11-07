import {createSlice } from '@reduxjs/toolkit'

import { UserInterface, userListInterface } from '../interfaces/interfaces';

export const userSlice = createSlice({
    name: 'user',
    initialState :{
        userId: "",
        username: "",
        email: "",
        status: "",
        friends: [],
        chatrooms: [],
        chats: [],
    } as UserInterface,

    reducers: {
        LOAD_USER: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.email = action.payload.username;
            state.status = action.payload.status;
            state.friends = action.payload.friends;
            state.chatrooms = action.payload.chatrooms;
            state.chats = action.payload.chats;
        }

    }
});


export const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: {
        usersList: []
    } as userListInterface,
    reducers: {
        LOAD_USER_LIST: (state, action) => {

            // TODO: To ensure uniqueness modify replace list to set
            //Updating active userList
            for (const data of action.payload.data){
                const {username, user_id} = data;

                state.usersList.push({username: username, userId: user_id})
            }
        }
    }
})

export const {LOAD_USER} = userSlice.actions;

export const {LOAD_USER_LIST} = allUsersSlice.actions;


//export default authSlice.reducer;


// Use a singe socket to perform everything

