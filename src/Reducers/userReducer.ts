import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocaleStorageType, SessionStorageType, UserProfile } from "../Types/LoginRegisterTypes";

const checkStoragesAndGetData = () => {
    const sesStorage: SessionStorageType = JSON.parse(sessionStorage.getItem('userData')!);
    const locStorage: LocaleStorageType = JSON.parse(localStorage.getItem('userData')!);
    if (sesStorage || locStorage) {
        const initialState: UserProfile = {
            login: sesStorage ? sesStorage.login : locStorage.value.login,
            firstName: sesStorage ? sesStorage.firstName : locStorage.value.firstName,
            lastName: sesStorage ? sesStorage.lastName : locStorage.value.lastName,
            email: sesStorage ? sesStorage.email : locStorage.value.email,
            role: sesStorage ? sesStorage.role : locStorage.value.role
        }
        return initialState;
    } else return null;
}

const initialState: UserProfile | null = checkStoragesAndGetData();

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        putUser: (state, action: PayloadAction<UserProfile | null>) => {
            return action.payload;
        },
        userLogout: (state) => {
            return null;
        }
    }
});

export const { putUser, userLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;