export interface WatchListType {
    symbolName: string,
    companyName: string,
    exchange: string,
    industryCategory: string,
    close: number,
    hasDividends: number,
    index: number
}

export interface WatchListColumnsType {
    id: 'symbolName' | 'companyName' | 'exchange' | 'industryCategory' | 'close' | 'hasDividends',
    label: string,
    index: number
}

export enum WatchListColumnIdType {
    "symbolName" = "symbolName",
    "companyName" = "companyName",
    "exchange" = "exchange",
    "industryCategory" = "industryCategory",
    "close" = "close",
    "hasDividends" = "hasDividends"
}

export interface WatchListModalType {
    symbolName: string,
    companyName: string,
    amountOfStocks: number
}

export interface WatchListModalColumnsType {
    id: 'symbolName' | 'companyName' | 'amountOfStocks',
    label: string,
    index: number
}