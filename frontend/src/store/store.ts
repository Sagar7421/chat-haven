import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterReducer'
import { authSlice } from '../reducers/authSlice'
import { userSlice, allUsersSlice } from '../reducers/userSlice'
import { chatListSlice } from '../reducers/chatSlice'
import { chatSlice } from '../reducers/chatSlice'
import socketMiddleware from '../middlewares/socketMiddleware'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    allUsers: allUsersSlice.reducer,
    chatSlice: chatSlice.reducer,
    chatList: chatListSlice.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store