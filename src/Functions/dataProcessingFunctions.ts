import { HistoricalTableColumnType, HistoricalTableType } from "../Types/HistoricalTableTypes";
import { Statistics, StatisticsColumn, StatisticsRows } from "../Types/StatisticsTypes";
import { ColumnType, TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from "../Types/TickersTypes";
import { WatchListColumnsType, WatchListType } from "../Types/WatchListTypes";
import { transformDate, transformVolume } from "./utilsFunctions";

// This function creates an object for columns in table with Material UI.
export const createColumns = (allTickers: Array<TickerType> | undefined) => {
    if (allTickers) {
        const tickersKeys = Object.keys(allTickers![0]);
        //Creates a new object with fields for column needs.
        const res: TickerColumnType[] = tickersKeys.slice(0, 2).map((data) => {
            const newData: TickerColumnType = {
                id: data.toString() as ColumnType.name,
                label: data,
                index: 0
            }
            return newData;
        });
        //Assigning an index to array elements
        res.forEach((ticker, index) => ticker.index = index);
        return res;
    }
};

// This function creates an object for rows in table with Material UI.
export const createRows = (param: string, allTickers: Array<TickerType> | undefined) => {
    if (allTickers) {
        //Creates a new object with fields for rows needs.
        const tickersData: Array<TickerType> = allTickers!.map((ticker) => {
            const res: TickerType = {
                name: ticker.name,
                companyName: ticker.companyName,
                index: 0
            }
            return res;
        })
        tickersData.forEach((ticker, index) => ticker.index = index);
        //Ticker search by letters entered in the text field by symbol and company name
        if (param) {
            return tickersData.filter((ticker) => (ticker.name.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined)
                || (ticker.companyName.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined));
        }
        return tickersData;
    }
};

export const createColumnsForHistoricalTable = (ticker: Array<TickerDataType>) => {
    if (ticker) {
        const tickersKeys = Object.keys(ticker[0]);
        const res: HistoricalTableColumnType[] = tickersKeys.map((key) => {
            const column: HistoricalTableColumnType = {
                id: 'date',
                lable: ""
            }
            if (key.toString().toLocaleLowerCase() === 'time') {
                column.id = "date"
                column.lable = "date"
            }
            if (key.toString().toLocaleLowerCase() === 'values') {
                column.id = 'volume'
                column.lable = 'volume'
            }
            if (key.toString().toLocaleLowerCase() !== 'values' && key.toString().toLocaleLowerCase() !== 'time') {
                column.id = key.toString() as typeof column.id
                column.lable = key
            }
            return column;
        })
        return res;
    }
};

export const createRowsForHistoricalTable = (ticker: Array<TickerDataType>): HistoricalTableType[] | undefined => {
    if (ticker) {
        const res: HistoricalTableType[] = ticker.map((data) => {
            const row: HistoricalTableType = {
                date: transformDate(data.time),
                open: data.open,
                high: data.high,
                low: data.low,
                close: data.close,
                volume: transformVolume(data.volume!)!
            }
            return row;
        });
        return res;
    }
};

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

export const createColumnsForStatistic = (statsObject: Statistics[] | undefined) => {
    if (statsObject) {
        const res: StatisticsColumn[] = statsObject!.map((item, index) => {
            const column: StatisticsColumn = {
                id: "valuationMeasures",
                label: "",
                index: index
            };
            column.id = item.statisticName as typeof column.id;
            return column;
        })
        return res;
    }
};

export const createRowsForStatistic = (statsObject: Map<string, string | number | null> | undefined) => {
    if (statsObject) {
        const res: StatisticsRows[] = [];
        statsObject.forEach((value, key) => {
            const rows: StatisticsRows = {
                title: key,
                value: value === null ? "N/A" : value
            };
            res.push(rows);
        })
        return res;
    }
};

export const createColumnsForWatchList = (data: Array<WatchListType>) => {
    const dataKeys = Object.keys(data[0]);
    const res: WatchListColumnsType[] = dataKeys.map((key) => {
        const column: WatchListColumnsType = {
            id: key.toString(),
            label: key
        }
        return column;
    })
    
    return res;
};

export const createRowsForWatchList = (data: Array<WatchListType>) => {
    const res = data.map((item) => {
        const row: WatchListType = {
            symbolName: item.symbolName,
            companyName: item.companyName,
            exchange: item.exchange,
            industryCategory: item.industryCategory,
            close: item.close,
            hasDividends: item.hasDividends
        }
        return row;
    });
    console.log(res)
    return res;
};

