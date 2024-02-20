export interface WatchListType {
    symbolName: string,
    companyName: string,
    exchange: string,
    industryCategory: string,
    close: number,
    hasDividends: number
}

export interface WatchListColumnsType {
    id: string,
    label: string
}