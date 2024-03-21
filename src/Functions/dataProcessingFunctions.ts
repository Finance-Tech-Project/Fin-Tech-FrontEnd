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

export const createMapToOpenCloseModal = (functionName: string, functionSignature: React.Dispatch<React.SetStateAction<boolean>>) => {
    const res = new Map<string, (value: React.SetStateAction<boolean>) => void>();
    res.set(functionName, functionSignature);
    return res;
};




