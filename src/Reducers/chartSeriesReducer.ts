import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChartSeriesNames } from "../Enums/Enums";

interface ChartSeries {
    seriesName: ChartSeriesNames
}

const initialChartSeries: ChartSeries = {
    seriesName: ChartSeriesNames.CandlesSeries
}

const chartSeriesSlice = createSlice({
    name: 'chartSeries',
    initialState: initialChartSeries,
    reducers: {
        putSeriesName(state, action: PayloadAction<ChartSeriesNames>) {
            state.seriesName = action.payload;
        }
    }
});

export const {putSeriesName} = chartSeriesSlice.actions;
export const chartSeriesReducer = chartSeriesSlice.reducer;