import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataType } from "../Types/TickersTypes";
import { SymbolData } from "../Types/DataReducerTypes";

interface HistoricalDataState {
    dataStock: SymbolData
}

const initialHistoricalData: HistoricalDataState = {
    dataStock: {
        dailyData: [],
        weeklyData: [],
        monthlyData: [],
        yearlyData: []
    }
};

const historicalDataSlice = createSlice({
    name: "historicalData",
    initialState: initialHistoricalData,
    reducers: {
        putDailyData(state, action: PayloadAction<TickerDataType[]>) {
            state.dataStock.dailyData = action.payload;
        },
        putWeeklyData(state, action: PayloadAction<TickerDataType[]>) {
            state.dataStock.weeklyData = action.payload;
        },
        putMonthlyData(state, action: PayloadAction<TickerDataType[]>) {
            state.dataStock.monthlyData = action.payload;
        },
        putYearlyData(state, action: PayloadAction<TickerDataType[]>) {
            state.dataStock.yearlyData = action.payload;
        }
    }
});

export const { putDailyData, putWeeklyData, putMonthlyData, putYearlyData } = historicalDataSlice.actions;
export const historicalDataReducer = historicalDataSlice.reducer;