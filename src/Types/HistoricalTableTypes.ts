export interface HistoricalTableColumnType {
    id: 'date' | 'open' | 'high' | 'low' | 'close' | 'volume',
    label: string,
    index?: number
}

export interface HistoricalTableType {
    date: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number | string
}

export enum HistoricalTableColumnIdType {
    date = "date",
    open = "open",
    high = "high",
    low = "low",
    close = "close",
    volume = "volume"
}

