import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataType, TickerDataVolumeType } from "../Types/TickersTypes";

interface AnalyticInterface {
    movAvg: {
        color: string,
        period: number,
        movAvgData: TickerDataVolumeType[]
    },
    simpleIncome: {
        color: string,
        period: number,
        simpleIncomeData: TickerDataVolumeType[]
    }
}

const initialAnalyticInterface: AnalyticInterface = {
    movAvg: {
        color: 'red',
        period: 0,
        movAvgData: []
    },
    simpleIncome: {
        color: 'yellow',
        period: 0,
        simpleIncomeData: []
    }
};

const analyticInterfaceSlice = createSlice({
    name: 'analyticInterface',
    initialState: initialAnalyticInterface,
    reducers: {
        putMovAvgPeriod(state, action: PayloadAction<number>) {
            state.movAvg.period = action.payload;
        },
        putSimpleIncomePeriod(state, action: PayloadAction<number>) {
            state.simpleIncome.period = action.payload;
        },
        putMovAvgData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.movAvg.movAvgData = action.payload;
        },
        putSimpleIncomeData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.simpleIncome.simpleIncomeData = action.payload;
        }
    },
});

export const { putMovAvgPeriod, putSimpleIncomePeriod, putMovAvgData, putSimpleIncomeData } = analyticInterfaceSlice.actions;
export const analyticInterfaceReducer = analyticInterfaceSlice.reducer;