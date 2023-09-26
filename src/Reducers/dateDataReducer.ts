import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPeriod } from "../Functions/getPeriod";

interface DateData {
    currentDateFrom: string,
    currentDateTo: string
};

const initialDateData: DateData = {
    currentDateFrom: getPeriod(2)[0],
    currentDateTo: getPeriod(2)[1]
};

const dateDataSlice = createSlice({
    name: 'dateData',
    initialState: initialDateData,
    reducers: {
        putCurrentDateFrom(state, action: PayloadAction<string>) {
            state.currentDateFrom = action.payload;
        },
        putCurrentDateTo(state, action: PayloadAction<string>) {
            state.currentDateTo = action.payload;
        }
    }
});

export const { putCurrentDateFrom, putCurrentDateTo } = dateDataSlice.actions;
export const dateDataReducer = dateDataSlice.reducer;