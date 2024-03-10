/* eslint-disable @typescript-eslint/no-unused-vars */
import { HistoricalTableColumnType } from "../Types/HistoricalTableTypes";
import { Statistics, StatisticsColumnIdType, StatisticsColumnType } from "../Types/StatisticsTypes";
import { ColumnType, TickerColumnType } from "../Types/TickersTypes";
import { WatchListCreatePortfolioColumnsType, WatchListCreatePortfolioIdType, WatchListCreatePortfolioType } from "../Types/WatchListModalCreatePortfolioType";
import { WatchListColumnIdType, WatchListColumnsType, WatchListType } from "../Types/WatchListTypes";

/* 
This class represent functions creating column for tables in project with Material UI.
Function getKeys() recived data and create keys names of fields in object.
Each function creates an object that matches the type in current table,
and returns that object in array or, if recived data was undefined, will return an empty array.
*/

export class CreatingColumnsForTables<T> {

    private getKeys = (data: Array<T>): Array<string> => {
        return Object.keys(data[0]!);
    }

    public createColumnsForStartPage = (data: Array<T> | undefined): Array<TickerColumnType> => {
        return data !== undefined ? this.getKeys(data).slice(0, 2).map((item, index) => {
            const column: TickerColumnType = {
                id: item.toString() as ColumnType.name,
                label: item,
                index: index
            }
            return column;
        }) : new Array<TickerColumnType>();
    };

    public createColumnsForHistoricalTable = (data: Array<T>): Array<HistoricalTableColumnType> => {
        return this.getKeys(data).map((item) => {
            const column: HistoricalTableColumnType = {
                id: 'date',
                lable: ""
            }
            if (item.toString().toLocaleLowerCase() === 'time') {
                column.id = "date"
                column.lable = "date"
            }
            if (item.toString().toLocaleLowerCase() === 'values') {
                column.id = 'volume'
                column.lable = 'volume'
            }
            if (item.toString().toLocaleLowerCase() !== 'values' && item.toString().toLocaleLowerCase() !== 'time') {
                column.id = item.toString() as typeof column.id
                column.lable = item
            }
            return column;
        });
    };

    public createColumnsForStatistic = (data: Array<T> | undefined): Array<StatisticsColumnType> => {
        const statsData = data as Array<Statistics> | undefined;
        return statsData !== undefined ? statsData.map((item, index) => {
            const column: StatisticsColumnType = {
                id: item.statisticName as StatisticsColumnIdType,
                label: "",
                index: index
            };
            return column;
        }) : new Array<StatisticsColumnType>();
    };

    public createColumnsForWatchList = (data: Array<T> | undefined): Array<WatchListColumnsType> => {
        return data !== undefined ? this.getKeys(data).map((item, index) => {
            const column: WatchListColumnsType = {
                id: item.toString() as WatchListColumnIdType,
                label: item,
                index: index
            }
            return column;
        }) : new Array<WatchListColumnsType>();
    };

    public createColumnsForWatchListPortfolioCreate = (data: Array<T> | undefined): Array<WatchListCreatePortfolioColumnsType> => {
        return data !== undefined ? this.getKeys(data).map((item, index) => {
            const column: WatchListCreatePortfolioColumnsType = {
                id: item.toString() as WatchListCreatePortfolioIdType,
                label: item,
                index: index
            };
            return column;
        }) : new Array<WatchListCreatePortfolioColumnsType>();
    };
}