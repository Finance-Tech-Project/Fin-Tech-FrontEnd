import { TickerDataType } from "./TickersTypes";

export interface Data {
    dailyData: Array<TickerDataType>,
    weeklyData: Array<TickerDataType>,
    monthlyData: Array<TickerDataType>,
    yearlyData: Array<TickerDataType>
}