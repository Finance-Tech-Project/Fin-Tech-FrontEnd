import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = null as string | null

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        putToken: (state, action: PayloadAction<string>) => {
            return action.payload;
        },
        deleteToken: (state) => {
            return null;
        }
    }
});

export const { putToken, deleteToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;