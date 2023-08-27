export enum ColumnType {
	"symbol" = "symbol",
	"name" = "name"
}

export interface TickerType {
    symbol: string,
    name: string,
    industryCategory?: string,
    type?: string,
    exchange?: string,
    index?: number
}

export interface TickerColumnType {
    id: 'symbol' | 'name',
    label: string,
    index?: number
}

export interface TickerDataType {
    time: string,
	open: number,
	high: number,
	low: number,
	close: number,
    values?: Array<TickerDataVolumeType>
}

export interface TickerDataVolumeType {
    time: string, 
    value: number
}