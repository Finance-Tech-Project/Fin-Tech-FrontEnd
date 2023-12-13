import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocaleStorageType, UserProfile } from "../Types/LoginRegisterTypes";

const checkStoragesAndGetData = () => {
    const sesStorage: UserProfile = JSON.parse(sessionStorage.getItem('userData')!);
    const locStorage: LocaleStorageType = JSON.parse(localStorage.getItem('userData')!);
    if (sesStorage || locStorage) {
        const initialState: UserProfile = {
            login: sesStorage ? sesStorage.login : locStorage.value.login,
            firstName: sesStorage ? sesStorage.firstName : locStorage.value.firstName,
            lastName: sesStorage ? sesStorage.lastName : locStorage.value.lastName,
            email: sesStorage ? sesStorage.email : locStorage.value.email,
            roles: sesStorage ? sesStorage.roles : locStorage.value.roles
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