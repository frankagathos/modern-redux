import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, fetchUsers, deleteUser as deleteUserRequest } from "../infrastructure/users";

//first create the thunk
export const getUsers = createAsyncThunk("users", fetchUsers)
export const addNewUser = createAsyncThunk("users/addNewUser", createUser)
export const deleteUser = createAsyncThunk("users/deleteUser", deleteUserRequest)
//create the slice
const userSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: {
        [getUsers.pending]: state => { state.loading = true },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        },
        [addNewUser.fulfilled]: (state, action) => {
            state.data.push(action.payload);
        },
        [addNewUser.rejected]: (state, action) => {
            state.error = action.error.message
        },
        [deleteUser.fulfilled]: (state, action) => {
            const newUsers = state.data.filter(user => user.id !== action.payload)
            state.data = newUsers;
        },
        [deleteUser.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

//selectors
export const selectUsers = state => state.users?.data
export const selectUsersLoading = state => state.users?.loading
export const selectError = state => state.users.error
export default userSlice.reducer