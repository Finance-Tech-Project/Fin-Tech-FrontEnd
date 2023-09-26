import { BASE_URL, DEFAULT_DATE_FROM, DEFAULT_DATE_TO, QUOTE_HISTORY } from "../Constants/fetchConstants";
import { putDailyData, putMonthlyData, putWeeklyData, putYearlyData } from "../Reducers/historicalDataReducer";
import { TickerDataType } from "../Types/TickersTypes";
import { AppDispatch } from "../app/store"

export const getSymbolDataForDefaultPeriod = (tickerSymbol: string, forHowManyStocks: number) => {
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
                if (forHowManyStocks === 1) {
                    dispatch(putDailyData({ data: res[0], forHowManyStocks: 1 }));
                    dispatch(putWeeklyData({ data: res[1], forHowManyStocks: 1 }));
                    dispatch(putMonthlyData({ data: res[2], forHowManyStocks: 1 }));
                    dispatch(putYearlyData({ data: res[3], forHowManyStocks: 1 }));
                } else {
                    dispatch(putDailyData({ data: res[0], forHowManyStocks: 2 }));
                    dispatch(putWeeklyData({ data: res[1], forHowManyStocks: 2 }));
                    dispatch(putMonthlyData({ data: res[2], forHowManyStocks: 2 }));
                    dispatch(putYearlyData({ data: res[3], forHowManyStocks: 2 }));
                }
            }
        } catch (error) {

        }
    }
}

export const getSymbolDataForPeriodRange = (tickerSymbol: string, dateFrom: string, dateTo: string, forHowManyStocks: number) => {
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
                if (forHowManyStocks === 1) {
                    dispatch(putDailyData({ data: res[0], forHowManyStocks: 1 }));
                    dispatch(putWeeklyData({ data: res[1], forHowManyStocks: 1 }));
                    dispatch(putMonthlyData({ data: res[2], forHowManyStocks: 1 }));
                    dispatch(putYearlyData({ data: res[3], forHowManyStocks: 1 }));
                } else {
                    dispatch(putDailyData({ data: res[0], forHowManyStocks: 2 }));
                    dispatch(putWeeklyData({ data: res[1], forHowManyStocks: 2 }));
                    dispatch(putMonthlyData({ data: res[2], forHowManyStocks: 2 }));
                    dispatch(putYearlyData({ data: res[3], forHowManyStocks: 2 }));
                }
            }
        } catch (error) {

        }
    }
}