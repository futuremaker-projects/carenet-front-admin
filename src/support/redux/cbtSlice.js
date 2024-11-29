import {createSlice} from "@reduxjs/toolkit";

const cbtSlice = createSlice({
    name: 'cbt',
    initialState: {
        page: 0
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
})

export const {
    setPage
} = cbtSlice.actions;

export default cbtSlice.reducer;

