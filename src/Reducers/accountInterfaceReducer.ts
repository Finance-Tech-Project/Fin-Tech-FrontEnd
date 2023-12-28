import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
};

const accountInterfaceSlice = createSlice({
    name: 'accountInterface',
    initialState: initialState,
    reducers: {
        setOpenColseToolbar(state, action: PayloadAction<boolean>) {
           state.open = action.payload; 
        }
    }
});