import { transformDate, transformVolume } from "../Functions/utilsFunctions";
import { HistoricalTableType } from "../Types/HistoricalTableTypes";
import { StatisticsRows } from "../Types/StatisticsTypes";
import { TickerDataType, TickerType } from "../Types/TickersTypes";
import { WatchListCreatePortfolioType } from "../Types/WatchListModalCreatePortfolioType";
import { WatchListType } from "../Types/WatchListTypes";

/* 
This class represent functions creating rows for tables in project with Material UI.
Each function creates an object that matches the type in the current table,
and returns that object in array or if recived data was undefined, will return an empty array.
*/

export class CreatingRowsForTables<T> {

    public createRowsForStartPage = (data: Array<TickerType> | undefined): Array<TickerType> => {
        return data ? data.map((ticker, index) => {
            const row: TickerType = {
                symbolName: ticker.symbolName,
                companyName: ticker.companyName,
                index: index
            }
            return row;
        }) : new Array<TickerType>();
    };

    public createRowsForHistoricalTable = (data: Array<TickerDataType> | undefined): Array<HistoricalTableType> => {
        return data ? data.map((data) => {
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
        return data ? data.map((item, index) => {
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

    public createRowsForWatchListPortfolioCreate = (data: Array<WatchListCreatePortfolioType> | undefined): Array<WatchListCreatePortfolioType> => {
        return data ? data.map((item) => {
            const row: WatchListCreatePortfolioType = {
                symbolName: item.symbolName,
                companyName: item.companyName,
                amountOfStocks: null,
                removeSymbol: null
            };
            return row;
        }) : new Array<WatchListCreatePortfolioType>();
    };
}