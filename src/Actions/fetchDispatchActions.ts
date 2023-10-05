import { DEFAULT_DATE_FROM, DEFAULT_DATE_TO, FetchConstants } from "../Enums/Enums";
import { putMovAvgData, putSimpleIncomeData, putSimpleIncomeDataToCompare } from "../Reducers/analyticIterfaceReducer";
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
                FetchConstants.ANALYTICS_AVG +
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
                FetchConstants.ANALYTICS_SIMPLE_INCOME +
                FetchConstants.DATE_FROM + dateFrom +
                FetchConstants.DATE_TO + dateTo +
                FetchConstants.TICKER + symbolName +
                FetchConstants.PERIOD + period
                }`);
            if (response.ok) {
                const data: TickerDataVolumeType[] = await response.json();
                if (!symbolNameToCompare) {
                    dispatch(putSimpleIncomeData(data));
                } else {
                    dispatch(putSimpleIncomeDataToCompare(data));
                }
            }
        } catch (error) {

        }
    }
};