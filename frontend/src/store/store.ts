import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './counterReducer'
import { authSlice } from '../reducers/authSlice'
import { userSlice, allUsersSlice } from '../reducers/userSlice'

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    allUsers: allUsersSlice.reducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store