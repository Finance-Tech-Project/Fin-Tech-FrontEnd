import { BASE_URL, DEFAULT_DATE_FROM, DEFAULT_DATE_TO, QUOTE_HISTORY } from "../Constants/fetchConstants";
import { putDailyData, putMonthlyData, putWeeklyData, putYearlyData } from "../Reducers/historicalDataReducer";
import { TickerDataType } from "../Types/TickersTypes";
import { AppDispatch } from "../app/store"

export const getSymbolDataForDefaultPeriod = (tickerSymbol: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${BASE_URL + QUOTE_HISTORY + "?dateFrom=" + DEFAULT_DATE_FROM + "&dateTo=" + DEFAULT_DATE_TO + "&ticker=" + tickerSymbol}`);
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
            const response = await fetch(`${BASE_URL + QUOTE_HISTORY + "?dateFrom=" + dateFrom + "&dateTo=" + dateTo + "&ticker=" + tickerSymbol}`);
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