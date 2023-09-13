export enum ColumnType {
	"name" = "name",
    "companyName" = "companyName",
}

export interface TickerType {
    name: string,
    companyName : string,
    industryCategory?: string,
    type?: string,
    exchange?: string,
    index?: number
}

export interface TickerColumnType {
    id: 'name',
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