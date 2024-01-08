import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    openCloseToolbar: false
};

const accountInterfaceSlice = createSlice({
    name: 'accountInterface',
    initialState: initialState,
    reducers: {
        setOpenColseToolbar(state, action: PayloadAction<boolean>) {
           state.openCloseToolbar = action.payload; 
        }
    }
});

export const {setOpenColseToolbar} = accountInterfaceSlice.actions;
export const accountInterfaceReducer = accountInterfaceSlice.reducer;