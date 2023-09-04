export interface HistoricalTableColumnType {
    id: 'date' | 'open' | 'high' | 'low' | 'close' | 'volume',
    lable: string
}

export interface HistoricalTableType {
    date: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number
}