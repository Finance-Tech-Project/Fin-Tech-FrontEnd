import { ALL_SYMBOLS, BASE_URL, DEFAULT_DATE_FROM, DEFAULT_DATE_TO, QUOTE_HISTORY, START, SYMBOLS } from "../Constants/fetchConstants";
import { TickerDataType, TickerType } from "../Types/TickersTypes";

export const getAllTickers = async () => {
    try {
        const response = await fetch(`${BASE_URL.concat(ALL_SYMBOLS)}`);
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