import { FetchConstants } from "../Enums/Enums";
import { Statistics } from "../Types/StatisticsTypes";
import { TickerType } from "../Types/TickersTypes";

export const getSeacrhedSymbols = async (letters: string) => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL.concat(FetchConstants.SEARCH_SYMBOLS).concat(letters)}`);
        if (response.ok) {
            const data: Array<TickerType> = await response.json();
            const res: Array<TickerType> = data.map(ticker => {
                const tickers: TickerType = {
                    name: ticker.name,
                    companyName: ticker.companyName,
                };
                return tickers;
            })
            return res;
        }
    } catch (error) {

    }
};

export const getTikersForMainPage = async () => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL.concat(FetchConstants.START).concat(FetchConstants.SYMBOLS)}`);
        if (response.ok) {
            const data: Array<TickerType> = await response.json();
            const res: Array<TickerType> = data.map(ticker => {
                const tickers: TickerType = {
                    name: ticker.name,
                    companyName: ticker.companyName,
                };
                return tickers;
            })
            return res;
        }
    } catch (error) {

    }
};

export const getStatisticsForSymbol = async (symbolName: string) => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL.concat(FetchConstants.STATISTICS).concat(symbolName)}`,
            { method: "POST" }
        );
        if (response.ok) {
            const data = await response.json();
            const arr: Statistics[] = [];
            Object.keys(data).forEach((item, index) => {
                const statsItem: Statistics = {
                    statisticName: item,
                    statisticData: new Map(Object.entries(data[item])),
                    index: index
                };
                arr.push(statsItem)
            })
            return arr;
        }
    } catch (error) {

    }
};

export const getDataForAnalyticChartAvg = async (symbolName: string, period: number, dateFrom: string, dateTo: string) => {
    try {
        const response = await fetch(`${
            FetchConstants.BASE_URL + 
            FetchConstants.ANALYTICS_AVG + 
            FetchConstants.DATE_FROM + dateFrom + 
            FetchConstants.DATE_TO + dateTo + 
            FetchConstants.TICKER + symbolName + 
            FetchConstants.PERIOD + period
        }`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {

    }
};

export const getDataForAnalyticChartSimpleIncome = async (symbolName: string, period: number, dateFrom: string, dateTo: string) => {
    try {
        const response = await fetch(`${
            FetchConstants.BASE_URL + 
            FetchConstants.ANALYTICS_SIMPLE_INCOME + 
            FetchConstants.DATE_FROM + dateFrom + 
            FetchConstants.DATE_TO + dateTo + 
            FetchConstants.TICKER + symbolName + 
            FetchConstants.PERIOD + period
        }`);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {

    }
};