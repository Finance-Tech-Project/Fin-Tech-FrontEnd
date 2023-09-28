import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataType } from "../Types/TickersTypes";
import { SymbolData } from "../Types/DataReducerTypes";

interface HistoricalDataState {
    dataStock: SymbolData
    dataStockToCompare: SymbolData
}

const initialHistoricalData: HistoricalDataState = {
    dataStock: {
        dailyData: [],
        weeklyData: [],
        monthlyData: [],
        yearlyData: []
    },
    dataStockToCompare: {
        dailyData: [],
        weeklyData: [],
        monthlyData: [],
        yearlyData: []
    }
};

interface PayloadObject {
    data: Array<TickerDataType>,
    forHowManyStocks: number
}

const historicalDataSlice = createSlice({
    name: "historicalData",
    initialState: initialHistoricalData,
    reducers: {
        putDailyData(state, action: PayloadAction<PayloadObject>) {
            if (action.payload.forHowManyStocks === 1) {
                state.dataStock.dailyData = action.payload.data;
            } else {
                state.dataStockToCompare.dailyData = action.payload.data;
            }
        },
        putWeeklyData(state, action: PayloadAction<PayloadObject>) {
            if (action.payload.forHowManyStocks === 1) {
                state.dataStock.weeklyData = action.payload.data;
            } else {
                state.dataStockToCompare.weeklyData = action.payload.data;
            }
        },
        putMonthlyData(state, action: PayloadAction<PayloadObject>) {
            if (action.payload.forHowManyStocks === 1) {
                state.dataStock.monthlyData = action.payload.data;
            } else {
                state.dataStockToCompare.monthlyData = action.payload.data;
            }
        },
        putYearlyData(state, action: PayloadAction<PayloadObject>) {
            if (action.payload.forHowManyStocks === 1) {
                state.dataStock.yearlyData = action.payload.data;
            } else {
                state.dataStockToCompare.yearlyData = action.payload.data;
            }
        }
    }
});

export const { putDailyData, putWeeklyData, putMonthlyData, putYearlyData } = historicalDataSlice.actions;
export const historicalDataReducer = historicalDataSlice.reducer;