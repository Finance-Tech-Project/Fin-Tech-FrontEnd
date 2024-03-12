/* eslint-disable @typescript-eslint/no-unused-vars */
import { HistoricalTableColumnType } from "../Types/HistoricalTableTypes";
import { Statistics, StatisticsColumnType } from "../Types/StatisticsTypes";
import { TickerColumnType } from "../Types/TickersTypes";
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioIdType } from "../Types/WatchListModalCreatePortfolioType";
import { WatchListColumnIdType, WatchListColumnsType, WatchListType } from "../Types/WatchListTypes";

/* 
This class represent functions creating column for tables in project with Material UI.
Function getKeys() recived data and create keys names of fields in object.
Each function creates an object that matches the type in current table,
and returns that object in array or, if recived data was undefined, will return an empty array.
*/

interface Column {
    id: string,
    label: string,
    index: number
}

export class CreatingColumnsForTables<T> {

    column: T;

    constructor(column?: Column) {
        this.column = column as T;
    }

    public getColumn() {
        return this.column;
    }

    private getKeys = (data: Array<T>): Array<string> => {
        return data && data[0] ? Object.keys(data[0]!) : new Array<string>();
    }

    private createColumnObject = (item: string, index: number): Column => {
        return new CreatingColumnsForTables<Column>({ id: item === 'time' ? 'date' : item, label: item, index: index }).getColumn();
    };

    private createColumnEmptyObject = (data: Array<string>): Array<Column> => {
        return data.map((item, index) => this.createColumnObject(item, index));
    };

    public createColumnsForStartPage = (data: Array<T> | undefined): Array<TickerColumnType> => {
        return data !== undefined ? this.getKeys(data).slice(0, 2).map((item, index) => 
            this.createColumnObject(item, index) as TickerColumnType) : new Array<TickerColumnType>();
    };

    public createColumnsForHistoricalTable = (data: Array<T>): Array<HistoricalTableColumnType> => {
        return data ? this.getKeys(data).map((item, index) => 
            this.createColumnObject(item, index) as HistoricalTableColumnType) : new Array<HistoricalTableColumnType>();
    };

    public createColumnsForStatistic = (data: Array<T> | undefined): Array<StatisticsColumnType> => {
        const statsData = data as Array<Statistics> | undefined;
        return statsData ? statsData.map((item, index) => 
            this.createColumnObject(item.statisticName, index) as StatisticsColumnType) : new Array<StatisticsColumnType>();
    };

    public createColumnsForWatchList = (data: Array<T> | undefined): Array<WatchListColumnsType> => {
        return data && data.length > 0 ? this.getKeys(data).map((item, index) => 
            this.createColumnObject(item, index) as WatchListColumnsType) : this.createColumnEmptyObject(
                [
                    WatchListColumnIdType.symbolName,
                    WatchListColumnIdType.companyName,
                    WatchListColumnIdType.exchange,
                    WatchListColumnIdType.industryCategory,
                    WatchListColumnIdType.close,
                    WatchListColumnIdType.hasDividends
                ]
            ) as Array<WatchListColumnsType>;
    };

    public createColumnsForWatchListPortfolioCreate = (data: Array<T> | undefined): Array<WatchListCreatePortfolioColumnsType> => {
        return data && data.length > 0 ? this.getKeys(data).map((item, index) => 
            this.createColumnObject(item, index) as WatchListCreatePortfolioColumnsType) : this.createColumnEmptyObject(
                [
                    WatchListCreatePortfolioIdType.symbolName,
                    WatchListCreatePortfolioIdType.companyName,
                    WatchListCreatePortfolioIdType.amountOfStocks,
                    WatchListCreatePortfolioIdType.removeSymbol
                ]
            ) as Array<WatchListCreatePortfolioColumnsType>;
    };
}