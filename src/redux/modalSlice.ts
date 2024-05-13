import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
    },
});

export const { open, close } = slice.actions;
export const selectModal = state => state.modal;
export default slice.reducer;