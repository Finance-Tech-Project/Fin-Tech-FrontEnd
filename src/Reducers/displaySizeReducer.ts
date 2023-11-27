import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialDisplaySize = window.screen.width;

const displaySizeSlice = createSlice({
    name: 'displaySize',
    initialState: initialDisplaySize,
    reducers: {
        putDisplaySize(state, action: PayloadAction<number>) {
            state = action.payload;
            return state;
        }
    }
});

export const { putDisplaySize } = displaySizeSlice.actions;
export const displaySizeReducer = displaySizeSlice.reducer;