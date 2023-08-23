import { ALL_TICKERS, BASE_URL, DEFAULT_TICKER_NAME, TICKER_DATA } from "../Constants/fetchConstants";
import { TickerDataType, TickerDataVolumeType, TickerType } from "../Types/TickersTypes";

export const getAllTickers = async () => {
    try {
        const response = await fetch(`${BASE_URL.concat(ALL_TICKERS)}`);
        if (response.ok) {

            const data: Array<TickerType> = await response.json();
            const res: Array<TickerType> = data.map(ticker => {
                const tickers: TickerType = {
                    symbol: ticker.symbol,
                    name: ticker.name,
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

export const getTickerData = async (tickerSymbol: string) => {
    try {
        // eslint-disable-next-line no-useless-concat
        const response = await fetch(`${BASE_URL + TICKER_DATA + tickerSymbol + "/" + "2021-08-15" + "/" + "2023-08-15"}`);
        if (response.ok) {
            const data: Array<TickerDataType> = await response.json();
            const res: Array<TickerDataType> = data.map(ticker => {
                const tickers: TickerDataType = {
                    time: ticker.time,
                    open: ticker.open,
                    high: ticker.high,
                    low: ticker.low,
                    close: ticker.close,
                    values: ticker.values!.map((tickerValue) => {
                        return {
                            time: tickerValue.time,
                            value: tickerValue.value
                        }
                    })
                }
                return tickers;
            });
            return res;
        }
    } catch (error) {

    }
};

export const getDefaultTickerData = async () => {
    try {
        // eslint-disable-next-line no-useless-concat
        const response = await fetch(`${BASE_URL + TICKER_DATA + DEFAULT_TICKER_NAME + "/" + "2021-08-15" + "/" + "2023-08-15"}`);
        if (response.ok) {
            const data: Array<TickerDataType> = await response.json();
            const res: Array<TickerDataType> = data.map(ticker => {
                const tickers: TickerDataType = {
                    time: ticker.time,
                    open: ticker.open,
                    high: ticker.high,
                    low: ticker.low,
                    close: ticker.close,
                    values: ticker.values!.map((tickerValue) => {
                        return {
                            time: tickerValue.time,
                            value: tickerValue.value
                        }
                    })
                }
                return tickers;
            });
            return res;
        }
    } catch (error) {
        
    }
};