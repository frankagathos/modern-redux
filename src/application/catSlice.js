import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatImgUrl } from "../infrastructure/catAPI";

// First, create the thunk
export const getCatImgUrl = createAsyncThunk('cat/getImgUrl', fetchCatImgUrl)

// Then create the slice
const catSlice = createSlice({
    name: 'cat',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    extraReducers: { //extraReducers allows createSlice to respond to other action types besides the types it has generated.
        [getCatImgUrl.pending]: state => { state.loading = true },
        [getCatImgUrl.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getCatImgUrl.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

})

//selectors
export const selectCatImgUrl = state => state.cat.data?.url
export const selectCatImgLoading = state => state.cat.loading

export default catSlice.reducer