import {createSlice} from "@reduxjs/toolkit";

const cbtSlice = createSlice({
    name: 'cbt',
    initialState: {
        pageNumber: 0,
        pageSize: 1,
        totalPages: 0,
        answers: {},
        showSizeMode: true,
        showViewMode: true,
    },
    reducers: {
        setNextPage: (state, action) => {
            const pageNumber = state.pageNumber;
            const result = pageNumber + (action.payload + (state.pageSize - 1));
            if (result > state.totalPages - 1) {
                state.pageNumber = state.totalPages - 1;
            } else {
                state.pageNumber = result;
            }
        },
        setPrevPage: (state, action) => {
            const pageNumber = state.pageNumber;
            const result = pageNumber - (action.payload + (state.pageSize - 1));
            if (result < 0) {
                state.pageNumber = 0;
            } else {
                state.pageNumber = result;
            }
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setAnswer: (state, action) => {
            state.answers[action.payload.questionId] = action.payload.answer;
        },
        resetAnswers: (state, action) => {
            state.answers = {};
        },
        showCbtModes: (state, action) => {
            state.showSizeMode = action.payload;
            state.showViewMode = action.payload;
        }
    }
})

export const {
    setNextPage,
    setPrevPage,
    setPageSize,
    setTotalPages,
    setAnswer,
    resetAnswers,
    showCbtModes,
} = cbtSlice.actions;

export default cbtSlice.reducer;

