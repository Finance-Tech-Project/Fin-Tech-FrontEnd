import {  TickerDataVolumeType } from "./TickersTypes";

export interface AnalyticInterface {
    color: string,
    colorToCompare?: string,
    period: number,
    movAvgData?: TickerDataVolumeType[],
    simpleIncomeData?: TickerDataVolumeType[],
    simpleIncomeDataToCompare?: TickerDataVolumeType[],
    volatilityData?: TickerDataVolumeType[],
    volatilityDataToCompare?: TickerDataVolumeType[]
}