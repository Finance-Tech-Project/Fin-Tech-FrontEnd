import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataType } from "../Types/TickersTypes";

interface HistoricalDataState {
    dailyData: Array<TickerDataType>,
    weeklyData: Array<TickerDataType>,
    monthlyData: Array<TickerDataType>,
    yearlyData: Array<TickerDataType>
}

const initialHistoricalData: HistoricalDataState = {
    dailyData: [],
    weeklyData: [],
    monthlyData: [],
    yearlyData: []
};

const historicalDataSlice = createSlice({
    name: "historicalData",
    initialState: initialHistoricalData,
    reducers: {
        putDailyData(state, action: PayloadAction<Array<TickerDataType>> ) {
            state.dailyData = action.payload;
            return state;
        },
        putWeeklyData(state, action: PayloadAction<Array<TickerDataType>>) {
            state.weeklyData = action.payload;
            return state;
        },
        putMonthlyData(state, action: PayloadAction<Array<TickerDataType>>) {
            state.monthlyData = action.payload;
            return state;
        },
        putYearlyData(state, action: PayloadAction<Array<TickerDataType>>) {
            state.yearlyData = action.payload;
            return state;
        }
    }
});

export const { putDailyData, putWeeklyData, putMonthlyData, putYearlyData } = historicalDataSlice.actions;
export const historicalDataReducer = historicalDataSlice.reducer;