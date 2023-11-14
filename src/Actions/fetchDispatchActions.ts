import { DEFAULT_DATE_FROM, DEFAULT_DATE_TO, FetchConstants } from "../Enums/Enums";
import { putMovAvgData,  putSharpRatioData,  putSharpRatioDataToCompare,  putSimpleIncomeData, putSimpleIncomeDataToCompare, putVolatilityData, putVolatilityDataToCompare } from "../Reducers/analyticIterfaceReducer";
import { putDailyData, putMonthlyData, putWeeklyData, putYearlyData } from "../Reducers/historicalDataReducer";
import { TickerDataType, TickerDataVolumeType } from "../Types/TickersTypes";
import { AppDispatch } from "../app/store"

export const getSymbolDataForDefaultPeriod = (tickerSymbol: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.QUOTE_HISTORY +
                FetchConstants.DATE_FROM +
                DEFAULT_DATE_FROM +
                FetchConstants.DATE_TO +
                DEFAULT_DATE_TO +
                FetchConstants.TICKER + tickerSymbol
                }`);
            if (response.ok) {
                const data: Array<Array<TickerDataType>> = await response.json();
                const res: Array<Array<TickerDataType>> = data.map((item) => {
                    return item.map((ticker) => {
                        const tickerData: TickerDataType = {
                            time: ticker["date"]!,
                            open: ticker.open,
                            high: ticker.high,
                            low: ticker.low,
                            close: ticker.close,
                            volume: ticker.volume
                        }
                        return tickerData;
                    });
                });
                dispatch(putDailyData(res[0]));
                dispatch(putWeeklyData(res[1]));
                dispatch(putMonthlyData(res[2]));
                dispatch(putYearlyData(res[3]));
            }
        } catch (error) {

        }
    }
}

export const getSymbolDataForPeriodRange = (tickerSymbol: string, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.QUOTE_HISTORY +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + tickerSymbol
                }`);
            if (response.ok) {
                const data: Array<Array<TickerDataType>> = await response.json();
                const res: Array<Array<TickerDataType>> = data.map((item) => {
                    return item.map((ticker) => {
                        const tickerData: TickerDataType = {
                            time: ticker["date"]!,
                            open: ticker.open,
                            high: ticker.high,
                            low: ticker.low,
                            close: ticker.close,
                            volume: ticker.volume
                        }
                        return tickerData;
                    });
                });
                dispatch(putDailyData(res[0]));
                dispatch(putWeeklyData(res[1]));
                dispatch(putMonthlyData(res[2]));
                dispatch(putYearlyData(res[3]));
            }
        } catch (error) {

        }
    }
}

export const getDataForAnalyticCharMovAvg = (symbolName: string, period: number, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.ANALYTICS +
                FetchConstants.MOV_AVG +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolName +
                FetchConstants.PERIOD + period
                }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                dispatch(putMovAvgData(data));
            }
        } catch (error) {

        }
    }
};

export const getDataForAnalyticChartSimpleIncome = (symbolName: string, symbolNameToCompare: string, period: number, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.ANALYTICS +
                FetchConstants.SIMPLE_INCOME +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolName +
                FetchConstants.YEARS + period
            }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                dispatch(putSimpleIncomeData(data));
            }
        } catch (error) {

        }
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.ANALYTICS +
                FetchConstants.SIMPLE_INCOME +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolNameToCompare +
                FetchConstants.YEARS + period
                }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                dispatch(putSimpleIncomeDataToCompare(data));
            }
        } catch (error) {

        }
    }
};

export const getDataForAnalyticChartVolatility = (symbolName: string, symbolNameToCompare: string, period: number, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstants.ANALYTICS +
                FetchConstants.VOLATILITY +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolName +
                FetchConstants.DAYS + period
            }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                dispatch(putVolatilityData(data));
            }
            if (symbolNameToCompare !== '') {
                const response = await fetch(`${FetchConstants.BASE_URL +
                    FetchConstants.ANALYTICS +
                    FetchConstants.VOLATILITY +
                    FetchConstants.DATE_FROM + dateFrom +
                    FetchConstants.DATE_TO + dateTo +
                    FetchConstants.TICKER + symbolNameToCompare +
                    FetchConstants.DAYS + period
                }`);
                if (response.ok) {
                    const data: TickerDataVolumeType[] = await response.json();
                    dispatch(putVolatilityDataToCompare(data));
                }
            }
        } catch (error) {
            
        }
    }
}

export const getDataForAnalyticChartSharpRatios = (symbolName: string, symbolNameToCompare: string, period: number, dateFrom: string, dateTo: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL + 
                FetchConstants.ANALYTICS + 
                FetchConstants.SHARP_RATIO +
                FetchConstants.DATE_FROM + dateFrom + 
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolName +
                FetchConstants.YEARS + period
            }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                dispatch(putSharpRatioData(data));
            }
            if (symbolNameToCompare !== '') {
                const response = await fetch(`${FetchConstants.BASE_URL + 
                    FetchConstants.ANALYTICS + 
                    FetchConstants.SHARP_RATIO +
                    FetchConstants.DATE_FROM + dateFrom + 
                    FetchConstants.DATE_TO + dateTo +
                    FetchConstants.TICKER + symbolNameToCompare +
                    FetchConstants.YEARS + period
                }`);
                if (response.ok) {
                    const data: TickerDataVolumeType[] = await response.json();
                    dispatch(putSharpRatioDataToCompare(data));
                }
            }
        } catch (error) {
            
        }
    }
};