import {createSlice} from "@reduxjs/toolkit";

const cbtSlice = createSlice({
    name: 'cbt',
    initialState: {
        pageNumber: 0,
        pageSize: 1
    },
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        }
    }
})

export const {
    setPageNumber,
    setPageSize,
} = cbtSlice.actions;

export default cbtSlice.reducer;

