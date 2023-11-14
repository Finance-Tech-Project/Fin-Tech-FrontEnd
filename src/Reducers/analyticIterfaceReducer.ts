import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TickerDataVolumeType } from "../Types/TickersTypes";

interface AnalyticInterface {
    movAvg: {
        color: string,
        period: number,
        movAvgData: TickerDataVolumeType[]
    },
    simpleIncome: {
        color: string,
        colorToCompare: string
        period: number,
        simpleIncomeData: TickerDataVolumeType[],
        simpleIncomeDataToCompare: TickerDataVolumeType[]
    },
    volatility: {
        color: string,
        colorToCompare: string,
        period: number,
        volatilityData: TickerDataVolumeType[],
        volatilityDataToCompare: TickerDataVolumeType[]
    },
    sharpRatio: {
        color: string,
        colorToCompare: string,
        period: number,
        sharpRatioData: TickerDataVolumeType[],
        sharpRatioDataToCompare: TickerDataVolumeType[]
    },
    interfaceHeight: number
}

const initialAnalyticInterface: AnalyticInterface = {
    movAvg: {
        color: 'red',
        period: 0,
        movAvgData: []
    },
    simpleIncome: {
        color: 'yellow',
        colorToCompare: 'red',
        period: 0,
        simpleIncomeData: [],
        simpleIncomeDataToCompare: []
    },
    volatility: {
        color: 'green',
        colorToCompare: 'rgba(109, 20, 184, 1)',
        period: 0,
        volatilityData: [],
        volatilityDataToCompare: []
    },
    sharpRatio: {
        color: "orange",
        colorToCompare: "fuchsia",
        period: 0,
        sharpRatioData: [],
        sharpRatioDataToCompare: []
    },
    interfaceHeight: 0
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
            state.movAvg.movAvgData = action.payload;
        },
        putSimpleIncomeData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.simpleIncome.simpleIncomeData = action.payload;
        },
        putSimpleIncomeDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.simpleIncome.simpleIncomeDataToCompare = action.payload;
        },
        putVolatilityData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.volatility.volatilityData = action.payload;
        },
        putVolatilityDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.volatility.volatilityDataToCompare = action.payload;
        },
        putSharpRatioData(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.sharpRatio.sharpRatioData = action.payload;
        },
        putSharpRatioDataToCompare(state, action: PayloadAction<TickerDataVolumeType[]>) {
            state.sharpRatio.sharpRatioDataToCompare = action.payload;
        },
        calcInterfaceHeight(state, action: PayloadAction<number>) {
            if (action.payload && action.payload > 95) {
                state.interfaceHeight = action.payload - 95;
            } else {
                state.interfaceHeight = 0;
            }
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
    putSharpRatioDataToCompare,
    calcInterfaceHeight
} = analyticInterfaceSlice.actions;
export const analyticInterfaceReducer = analyticInterfaceSlice.reducer;