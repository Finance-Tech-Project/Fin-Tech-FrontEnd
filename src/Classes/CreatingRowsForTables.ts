import { transformDate, transformVolume } from "../Functions/utilsFunctions";
import { HistoricalTableType } from "../Types/HistoricalTableTypes";
import { StatisticsRows } from "../Types/StatisticsTypes";
import { TickerDataType, TickerType } from "../Types/TickersTypes";
import { WatchListType } from "../Types/WatchListTypes";

/* 
This class represent functions creating rows for tables in project with Material UI.
Each function creates an object that matches the type in the current table,
and returns that object in array or if recived data was undefined, will return an empty array.
*/

export class CreatingRowsForTables<T> {

    public createRowsForStartPage = (param: string, data: Array<TickerType> | undefined): Array<TickerType> => {
        if (data !== undefined) {
            const tickersData: Array<TickerType> = data.map((ticker, index) => {
                const row: TickerType = {
                    name: ticker.name,
                    companyName: ticker.companyName,
                    index: index
                }
                return row;
            });

            //Ticker search by letters entered in the text field by symbol and company name
            if (param) {
                return tickersData.filter((ticker) => (ticker.name.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined)
                    || (ticker.companyName.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined));
            }
            return tickersData;
        }
        return new Array<TickerType>();
    };

    public createRowsForHistoricalTable = (data: Array<TickerDataType> | undefined): Array<HistoricalTableType> => {
        return data !== undefined ? data.map((data) => {
            const row: HistoricalTableType = {
                date: transformDate(data.time),
                open: data.open,
                high: data.high,
                low: data.low,
                close: data.close,
                volume: transformVolume(data.volume!)!
            }
            return row;
        }) : new Array<HistoricalTableType>();
    };

    public createRowsForStatistic = (data: Map<T, T> | undefined): Array<StatisticsRows> => {
        const res: Array<StatisticsRows> = [];
        if (data !== undefined) {
            data.forEach((value, key) => {
                const rows: StatisticsRows = {
                    title: key as string,
                    value: value === null ? "N/A" : value as string
                };
                res.push(rows);
            });
            return res;
        }
        return new Array<StatisticsRows>();
    };

    public createRowsForWatchList = (data: Array<WatchListType> | undefined): Array<WatchListType> => {
        return data !== undefined ? data.map((item, index) => {
            const row: WatchListType = {
                symbolName: item.symbolName,
                companyName: item.companyName,
                exchange: item.exchange,
                industryCategory: item.industryCategory,
                close: item.close,
                hasDividends: item.hasDividends,
                index: index
            }
            return row;
        }) : new Array<WatchListType>();
    };
}