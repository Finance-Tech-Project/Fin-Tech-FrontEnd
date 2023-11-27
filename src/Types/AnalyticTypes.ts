import {  TickerDataVolumeType } from "./TickersTypes";

export interface AnalyticInterface {
    color: string,
    colorToCompare?: string,
    period: number,
    data: TickerDataVolumeType[],
    dataToCompare?: TickerDataVolumeType[],
    analyticInterfaceEvents?: AnalyticInterfaceEvents
}

export interface AnalyticInterfaceEvents {
    interfaceHeight: number,
    analyticChartOrCompareTwoStocksClick: boolean,
    compareClick: boolean
}