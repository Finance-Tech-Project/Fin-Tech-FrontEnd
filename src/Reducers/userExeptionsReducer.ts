import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  UserExceptions } from "../Types/LoginRegisterTypes";

const initialState = null as UserExceptions | null;

export const userExceptionsSlice = createSlice({
    name: 'userExceptions',
    initialState: initialState,
    reducers: {
        putUserException(state, action: PayloadAction<UserExceptions>) {
           return action.payload;
        },
        clearExceptions(state) {
            return null;
        }
    }
});

export const { putUserException, clearExceptions } = userExceptionsSlice.actions;
export const userExceptionsReducer = userExceptionsSlice.reducer;