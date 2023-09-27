import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AnalyticInterface {
    movAvg: {
        color: string
        period: number
    },
    simpleIncome: {
        color: string
        period: number,
        seriesName: string
    }
}

const initialAnalyticInterface: AnalyticInterface = {
    movAvg: {
        color: 'red',
        period: 0
    },
    simpleIncome: {
        color: 'yellow',
        period: 0,
        seriesName: '',
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
        putSeriesNameForSimpleIncome(state, action: PayloadAction<string>) {
            state.simpleIncome.seriesName = action.payload;
        }
    },
});

export const { putMovAvgPeriod, putSimpleIncomePeriod, putSeriesNameForSimpleIncome } = analyticInterfaceSlice.actions;
export const analyticInterfaceReducer = analyticInterfaceSlice.reducer;