import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Exception, UserExceptions } from "../Types/LoginRegisterTypes";

const initialState = {
    exceptions: []
} as UserExceptions | null;

export const userExceptionsSlice = createSlice({
    name: 'userExceptions',
    initialState: initialState,
    reducers: {
        putUserException(state, action: PayloadAction<Exception>) {
            const newException: Exception = {
                exceptionType: action.payload.exceptionType,
                exceptionMessage: action.payload.exceptionMessage
            }
            if (!state) {
                state = {
                    exceptions: []
                } as UserExceptions | null;
            }
            state!.exceptions.push(newException);
            return state;
        },
        clearExceptions(state) {
            return null;
        }
    }
});

export const { putUserException, clearExceptions } = userExceptionsSlice.actions;
export const userExceptionsReducer = userExceptionsSlice.reducer;