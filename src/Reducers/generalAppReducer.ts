import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GeneralApp } from "../Types/GeneralAppTypes";
import { LocaleStorageType, SessionStorageType } from "../Types/LoginRegisterTypes";

const sesStorage: SessionStorageType = JSON.parse(sessionStorage.getItem('userData')!);
const locStorage: LocaleStorageType = JSON.parse(localStorage.getItem('userData')!);

const checkStorages = () => {
    if (sesStorage) {
        return sesStorage.passwordSymbols;
    } else if (locStorage) {
        return locStorage.passwordSymbols;
    } else {
        return "";
    }
};

const initialGeneralApp: GeneralApp = {
    displaySize: window.screen.width,
    isMobile: false,
    passwordSymbols: checkStorages()
};

const generalAppSlice = createSlice({
    name: 'generalApp',
    initialState: initialGeneralApp,
    reducers: {
        putDisplaySize(state, action: PayloadAction<number>) {
            state.displaySize = action.payload;
        },
        putDesktopMobile(state, action: PayloadAction<boolean>) {
            state.isMobile = action.payload;
        },
        putPasswordSymbols(state, action: PayloadAction<string>) {
            if (action.payload !== "") {
                state.passwordSymbols = action.payload;
            }
        }
    }
});

export const { putDisplaySize, putDesktopMobile, putPasswordSymbols } = generalAppSlice.actions;
export const generalAppReducer = generalAppSlice.reducer;