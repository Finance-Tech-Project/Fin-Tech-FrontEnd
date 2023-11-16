import {  TickerDataVolumeType } from "./TickersTypes";

export interface AnalyticInterface {
    color: string,
    colorToCompare?: string,
    period: number,
    data: TickerDataVolumeType[],
    dataToCompare?: TickerDataVolumeType[]
}