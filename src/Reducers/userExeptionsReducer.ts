import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Exeption, UserExeptions } from "../Types/LoginRegisterTypes";

const initialState: UserExeptions = {
    exeptions: []
};

export const userExeptionsSlice = createSlice({
    name: 'userExeptions',
    initialState: initialState,
    reducers: {
        putUserExeption(state, action: PayloadAction<Exeption>) {
            const newExeption: Exeption = {
                exeptionType: action.payload.exeptionType,
                exeptionMessage: action.payload.exeptionMessage
            }
            state.exeptions.push(newExeption);
        }
    }
});

export const { putUserExeption } = userExeptionsSlice.actions;
export const userExeptionsReducer = userExeptionsSlice.reducer;