import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { symbolName } from "typescript";

interface Symbols {
    symbolName: string,
    companyName: string,
    symbolsNamesToCompare: Array<string>
}

const initialSymbol: Symbols = {
    symbolName: "AAPL",
    companyName: "Apple Inc.",
    symbolsNamesToCompare: []
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
        putSymbolsNamesToCompare(state, action: PayloadAction<string>) {
            if (!state.symbolsNamesToCompare.includes(action.payload)) {
                state.symbolsNamesToCompare.push(action.payload)
            }
        }
    }
});

export const { putSymbolName, putSymbolCompanyName, putSymbolsNamesToCompare } = selectedSymbolSlice.actions;
export const selectedSymbolReducer = selectedSymbolSlice.reducer;