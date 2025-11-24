import { createSlice } from "@reduxjs/toolkit";
import allBooksData from "../utils/allBooksData";

const bookSlice = createSlice({
    name : "books",
    initialState : {
        books : [...allBooksData],
    },
    reducers : {
        addBook : (state, action) => {
            state.books.unshift(action.payload);
        },
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;