import { TickerDataType, TickerDataVolumeType } from "../Types/TickersTypes";

export const createCandlesData = (tickerData: Array<TickerDataType>) => {
    const data: Array<TickerDataType> = tickerData?.map((ticker) => {
        const res: TickerDataType = {
            time: ticker.time,
            open: ticker.open,
            high: ticker.high,
            low: ticker.low,
            close: ticker.close
        }
        return res;
    });
    return data;
};

export const createHistogramLineAreaData = (tickerData: Array<TickerDataType>) => {
    const data: Array<TickerDataVolumeType> = tickerData?.map((ticker) => {
        const res: TickerDataVolumeType = {
            time: ticker.time,
            value: ticker.volume!
        }
        return res;
    });
    return data;
};

// This function to check types. Return true or false.
// export const instanceOf = <T>(value: any, fieldName: string): value is T => fieldName in value;

// Search in table rows
export const findSymbolsInRows = (currentSymbol: string, searchedSymbol: string)=> 
    currentSymbol.toLowerCase().includes(searchedSymbol.toLowerCase()) ? currentSymbol : undefined;





