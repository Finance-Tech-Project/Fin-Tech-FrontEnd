/* eslint-disable @typescript-eslint/no-unused-vars */
import { HistoricalTableColumnType } from "../Types/HistoricalTableTypes";
import { Statistics, StatisticsColumnType } from "../Types/StatisticsTypes";
import { ColumnType, TickerColumnType } from "../Types/TickersTypes";

export class CreatingColumnsForTables<T> {

    private getKeys = (data: Array<T>): Array<string> => {
        return Object.keys(data[0]!);
    }

    public createColumnsForStartPage = (data: Array<T>): Array<TickerColumnType> => {
        return this.getKeys(data).slice(0, 2).map((item, index) => {
            const column: TickerColumnType = {
                id: item.toString() as ColumnType.name,
                label: item,
                index: index
            }
            return column;
        });
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

    public createColumnsForStatistic = (data: Array<T>): Array<StatisticsColumnType> => {
        const statsData = data as Array<Statistics>;
        return statsData.map((item, index) => {
            const column: StatisticsColumnType = {
                id: "valuationMeasures",
                label: "",
                index: index
            };
            column.id = item.statisticName as typeof column.id;
            return column;
        })
    };
}