import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialSymbol = {
    symbolName: "AAPL",
    companyName: "Apple Inc."
}

const selectedSymbolSlice = createSlice({
    name: "selectedSymbol",
    initialState: initialSymbol,
    reducers: {
        putSymbolName(state, action: PayloadAction<string>) {
            state.symbolName = action.payload; 
        },
        putSymbolCompanyName(state, action: PayloadAction<string>) {
            state.companyName = action.payload;
        }
    }
});

export const  {putSymbolName, putSymbolCompanyName} = selectedSymbolSlice.actions;
export const selectedSymbolReducer = selectedSymbolSlice.reducer;