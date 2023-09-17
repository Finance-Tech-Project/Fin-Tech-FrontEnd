import { BASE_URL, SEARCH_SYMBOLS, START, STATISTICS, SYMBOLS } from "../Constants/fetchConstants";
import { Statistics } from "../Types/StatisticsTypes";
import { TickerType } from "../Types/TickersTypes";

export const getSeacrhedSymbols = async (letters: string) => {
    try {
        const response = await fetch(`${BASE_URL.concat(SEARCH_SYMBOLS).concat(letters)}`);
        if (response.ok) {
            const data: Array<TickerType> = await response.json();
            const res: Array<TickerType> = data.map(ticker => {
                const tickers: TickerType = {
                    name: ticker.name,
                    companyName: ticker.companyName,
                    // industryCategory: ticker.industryCategory,
                    // type: ticker.type,
                    // exchange: ticker.exchange,
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
        const response = await fetch(`${BASE_URL.concat(START).concat(SYMBOLS)}`);
        if (response.ok) {
            const data: Array<TickerType> = await response.json();
            const res: Array<TickerType> = data.map(ticker => {
                const tickers: TickerType = {
                    name: ticker.name,
                    companyName: ticker.companyName,
                    industryCategory: ticker.industryCategory,
                    type: ticker.type,
                    exchange: ticker.exchange,
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
        const response = await fetch(`${BASE_URL.concat(STATISTICS).concat(symbolName)}`);
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
       

    } catch (error) {

    }
};