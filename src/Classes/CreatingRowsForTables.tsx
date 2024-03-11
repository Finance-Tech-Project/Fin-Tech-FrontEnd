import { transformDate, transformVolume } from "../Functions/utilsFunctions";
import { LoginRegisterTextField } from "../Styles/LoginRegisterStyles/LoginRegisterStyle";
import { HistoricalTableType } from "../Types/HistoricalTableTypes";
import { StatisticsRows } from "../Types/StatisticsTypes";
import { TickerDataType, TickerType } from "../Types/TickersTypes";
import { WatchListCreatePortfolioType } from "../Types/WatchListModalCreatePortfolioType";
import { WatchListType } from "../Types/WatchListTypes";
import { Button } from '@mui/material';

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

    public createRowsForWatchListPortfolioCreate = (data: Array<WatchListCreatePortfolioType> | undefined): Array<WatchListCreatePortfolioType> => {
        return data !== undefined ? data.map((item) => {
            const row: WatchListCreatePortfolioType = {
                symbolName: item.symbolName,
                companyName: item.companyName,
                amountOfStocks: <LoginRegisterTextField
                    type="number"
                    defaultValue='1'
                    widthForTableModalPortfolioCreate
                ></LoginRegisterTextField>,
                removeSymbol: <Button sx={{
                    width: '100%',
                    height: '56px',
                    border: '1.5px solid rgba(37, 59, 227, 0.8)',
                    backgroundColor: 'rgba(1, 17, 36, 0.8)',
                    color: 'white',
                    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
                }}>Remove</Button>
            };
            return row;
        }) : new Array<WatchListCreatePortfolioType>();
    };
}