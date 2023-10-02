import {  TickerDataVolumeType } from "./TickersTypes";

export interface AnalyticInterface {
    color: string,
    period: number,
    movAvgData?: TickerDataVolumeType[],
    simpleIncomeData?: TickerDataVolumeType[]
}