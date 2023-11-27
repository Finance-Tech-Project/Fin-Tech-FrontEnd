import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataVolumeType } from "../Types/TickersTypes";
import { AnalyticInterface, AnalyticInterfaceEvents } from "../Types/AnalyticTypes";
import { LWCHeaderInitValueHeight } from "../Constants/ProjectConstants/headerConstants";

interface AnalyticInterfaceReducer {
    movAvg: AnalyticInterface,
    simpleIncome: AnalyticInterface,
    volatility: AnalyticInterface,
    sharpRatio: AnalyticInterface
}

const initialAnalyticInterface: AnalyticInterfaceReducer = {
    movAvg: {
        color: 'red',
        period: 0,
        data: []
    },
    simpleIncome: {
        color: 'yellow',
        colorToCompare: 'red',
        period: 0,
        data: [],
        dataToCompare: []
    },
    volatility: {
        color: 'green',
        colorToCompare: 'rgba(109, 20, 184, 1)',
        period: 0,
        data: [],
        dataToCompare: []
    },
    sharpRatio: {
        color: "orange",
        colorToCompare: "fuchsia",
        period: 0,
        data: [],
        dataToCompare: []
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
        putVolatilityPeriod(state, action: PayloadAction<number>) {
            state.volatility.period = action.payload;
        },
        putSharpRatioPeriod(state, action: PayloadAction<number>) {
            state.sharpRatio.period = action.payload;
        },
        putMovAvgData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.movAvg.data = action.payload;
        },
        putSimpleIncomeData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.simpleIncome.data = action.payload;
        },
        putSimpleIncomeDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.simpleIncome.dataToCompare = action.payload;
        },
        putVolatilityData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.volatility.data = action.payload;
        },
        putVolatilityDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.volatility.dataToCompare = action.payload;
        },
        putSharpRatioData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.sharpRatio.data = action.payload;
        },
        putSharpRatioDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.sharpRatio.dataToCompare = action.payload;
        }
    }
});

export const {
    putMovAvgPeriod,
    putSimpleIncomePeriod,
    putVolatilityPeriod,
    putSharpRatioPeriod,
    putMovAvgData,
    putSimpleIncomeData,
    putSimpleIncomeDataToCompare,
    putVolatilityData,
    putVolatilityDataToCompare,
    putSharpRatioData,
    putSharpRatioDataToCompare
} = analyticInterfaceSlice.actions;
export const analyticInterfaceReducer = analyticInterfaceSlice.reducer;