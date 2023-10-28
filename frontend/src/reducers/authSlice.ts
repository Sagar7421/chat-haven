import {createSlice } from '@reduxjs/toolkit'

export interface AuthInterface {
    isLoggedIn: boolean
    userId: string
}

export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        isLoggedIn: false,
        userId: ""
    } as AuthInterface,
    reducers :{
        USER_LOGIN: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload.id
        },
        USER_LOGOUT: state => {
            state.isLoggedIn = false;
            state.userId = "";
        }
    }
})

export const {USER_LOGIN, USER_LOGOUT} = authSlice.actions;

//export default authSlice.reducer;



