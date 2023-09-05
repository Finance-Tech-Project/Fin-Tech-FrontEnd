import { MAIN_DATA, VOLUME_DATA } from "../Constants/fetchConstants";
import { HistoricalTableColumnType, HistoricalTableType } from "../Types/HistoricalTableTypes";
import { ColumnType, TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from "../Types/TickersTypes";

// This function creates an object for columns in table with Material UI.
export const createColumns = (allTickers: Array<TickerType> | undefined) => {
    if (allTickers) {
        const tickersKeys = Object.keys(allTickers![0]);
        //Creates a new object with fields for column needs.
        const res: TickerColumnType[] = tickersKeys.slice(0, 2).map((data) => {
            const newData: TickerColumnType = {
                id: data.toString() as ColumnType.symbol,
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
                symbol: ticker.symbol,
                name: ticker.name,
                index: 0
            }
            return res;
        })
        tickersData.forEach((ticker, index) => ticker.index = index);
        //Ticker search by letters entered in the text field by symbol and company name
        if (param) {
            return tickersData.filter((ticker) => (ticker.symbol.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined)
                || (ticker.name.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined));
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
            const values = Object.values(data.values!)
            const row: HistoricalTableType = {
                date: transformDate(data.time),
                open: data.open,
                high: data.high,
                low: data.low,
                close: data.close,
                volume: transformVolume(values[0].value)!
                
            }
            return row;
        });
        return res;
    }
};

export const transformFirstLetterToUpperCase = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const transformVolume = (volume: string | number) => {
    if (typeof volume === 'number') {
        const res = Intl.NumberFormat().format(volume).replace(/\s/g, ',')
        return res;
    }
}

export const createCandleData = (dataType: string, tickerData: Array<TickerDataType>) => {
    if (dataType === MAIN_DATA) {
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
    }
    return tickerData;
};

export const createHistogramAreaData = (dataType: string, tickerData: Array<TickerDataType>): TickerDataVolumeType[] => {
    const values: Array<TickerDataVolumeType> = [];
    if (dataType === VOLUME_DATA) {
        tickerData?.forEach((ticker) => {
            ticker.values?.forEach((tickerValue) => {
                const res: TickerDataVolumeType = {
                    time: tickerValue.time,
                    value: tickerValue.value
                }
                values.push(res);
            });
        });
        return values;
    }
    return values;
};

export const transformDate = (date: string) => {
    const arr = new Date(date).toString().split(" ");
    const res = arr[1] + " " + arr[2] + ", " + arr[3];
    return res;
};


// export const delimiterDataToPeriods = (period: string, data: Array<TickerDataType | TickerDataVolumeType>) => {
//     if (period === "1D") {
//         return data;
//     }
//     if (period === "1W") {
//         return data.filter((ticker) => {
//             const currentTime = ticker.time.toString();
//             const date = new Date(currentTime);
//             console.log(date.getDay() === 5 && ticker.time)
//             return date.getDay() === 5 && ticker;
//         })
//     }
//     if (period === "1M") {
//         const res: (TickerDataType | TickerDataVolumeType)[] = [];
//         const firstDate = new Date();
//         const plusMonth = new Date();
//         if (data[0]) {
//             firstDate.setTime((new Date(data[0].time).getTime()));
//             plusMonth.setTime(addMonth(firstDate, 1).getTime())
//         }

//         if (!(firstDate.getTime() === new Date().getTime())) {
//             data.forEach((ticker, index) => {
//                 if (!(index >= data.length - 1)) {
//                     const nextDate = new Date(data[index + 1].time.toString());
//                     if (nextDate.getTime() > plusMonth.getTime()) {
//                         res.push(ticker);
//                         plusMonth.setTime(addMonth(nextDate, 1).getTime());
//                     }
//                 }
//             })
//         }
//         // console.log(res)
//         return res;
//     }
// };

// const addMonth = (date: Date, months: number): Date => {
//     date.setMonth(date.getMonth() + months);
//     return date;
// };
