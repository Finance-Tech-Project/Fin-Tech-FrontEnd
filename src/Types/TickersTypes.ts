export enum TickerColumnIdType {
	symbolName = "symbolName",
    companyName = "companyName"
}

export interface TickerType {
    symbolName: string | "name",
    companyName : string,
    industryCategory?: string,
    type?: string,
    exchange?: string,
    index?: number,
    name?: "name"
}

export interface TickerColumnType {
    id: 'symbolName',
    label: string,
    index?: number
}

export interface TickerDataType {
    time: string |  "date",
	open: number,
	high: number,
	low: number,
	close: number,
    volume?: number,
    date?: "date"
}

export interface TickerDataVolumeType {
    time: string, 
    value: number
}