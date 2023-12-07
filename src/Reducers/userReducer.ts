import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../Types/LoginRegisterTypes";

const checkSesionStorage = () => {
    const storage: UserProfile = JSON.parse(sessionStorage.getItem('userData')!);
    if (storage) {
        const initialState: UserProfile = {
            login: storage.login,
            firstName: storage.firstName,
            lastName: storage.lastName,
            email: storage.email,
            roles: storage.roles
        }
        return initialState;
    } else return null;
}

const initialState: UserProfile | null = checkSesionStorage();

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