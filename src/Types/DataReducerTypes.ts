import { TickerDataType } from "./TickersTypes";

export interface SymbolData {
    dailyData: Array<TickerDataType>,
    weeklyData: Array<TickerDataType>,
    monthlyData: Array<TickerDataType>,
    yearlyData: Array<TickerDataType>
}

export interface Symbols {
    symbolName: string,
    companyName: string,
    symbolNameToCompare: string,
    companyNameToCompare: string
}