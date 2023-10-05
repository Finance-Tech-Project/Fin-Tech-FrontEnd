import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Symbols {
    symbolName: string,
    companyName: string,
    symbolNameToCompare: string
}

const initialSymbol: Symbols = {
    symbolName: "AAPL",
    companyName: "Apple Inc.",
    symbolNameToCompare: ""
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
        },
        putSymbolNameToCompare(state, action: PayloadAction<string>) {
            if (state.symbolName !== action.payload) {
                state.symbolNameToCompare = action.payload;
            }
        }
    }
});

export const { putSymbolName, putSymbolCompanyName, putSymbolNameToCompare } = selectedSymbolSlice.actions;
export const selectedSymbolReducer = selectedSymbolSlice.reducer;