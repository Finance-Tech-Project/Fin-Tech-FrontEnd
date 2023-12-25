import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GeneralApp } from "../Types/GeneralAppTypes";

const initialGeneralApp: GeneralApp = {
    displaySize: window.screen.width,
    isMobile: false,
    passwordSymbols: ""
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
            state.passwordSymbols = action.payload;
        }
    }
});

export const { putDisplaySize, putDesktopMobile, putPasswordSymbols } = generalAppSlice.actions;
export const generalAppReducer = generalAppSlice.reducer;