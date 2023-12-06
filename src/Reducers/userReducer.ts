import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../Types/LoginRegisterTypes";

const initialState = null as UserProfile | null

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        putUser: (state, action: PayloadAction<UserProfile>) => {
            return action.payload;
        },
        userLogout: (state) => {
            return null;
        }
    }
});

export const { putUser, userLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;