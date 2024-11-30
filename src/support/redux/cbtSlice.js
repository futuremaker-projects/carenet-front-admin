import {createSlice} from "@reduxjs/toolkit";

const cbtSlice = createSlice({
    name: 'cbt',
    initialState: {
        pageNumber: 0,
        pageSize: 1,
        totalPages: 0,
    },
    reducers: {
        setPageNumber: (state, action) => {
            const pageNumber = state.pageNumber;
            const result = pageNumber + action.payload;
            if (result < 0) {
                state.pageNumber = 0;
            } else if (result > state.totalPages - 1) {
                state.pageNumber = state.totalPages - 1;
            } else {
                state.pageNumber = result;
            }
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    }
})

export const {
    setPageNumber,
    setPageSize,
    setTotalPages
} = cbtSlice.actions;

export default cbtSlice.reducer;

