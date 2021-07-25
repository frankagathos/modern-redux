import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'theme',//name used in action type
    initialState:'white',
    reducers:{
        update : (state,action) => state = action.payload 
    }
})
//selectors
export const selectTheme = (state) => state.theme  

export const {update} = themeSlice.actions;
export default themeSlice.reducer;