// export interface Ticker {
// 	symbol: string,
// 	name: string,
// 	index?: number
// }

// export interface Column {
// 	id: 'symbol' | 'name',
// 	label: string,
// 	index?: number
// }

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
	open: string | number,
	high: string | number,
	low: string | number,
	close: string | number,
    values?: Array<TickerDataVolumeType>
}

export interface TickerDataVolumeType {
    time: string, 
    value: number
}