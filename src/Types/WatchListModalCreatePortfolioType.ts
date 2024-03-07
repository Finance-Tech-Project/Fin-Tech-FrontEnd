export interface WatchListCreatePortfolioType {
    symbolName: string,
    companyName: string,
    amountOfStocks: number,
    removeSymbol: JSX.Element
}

export interface WatchListCreatePortfolioTypeReadonly {
    readonly [x: number]: WatchListCreatePortfolioType
}

export interface WatchListCreatePortfolioColumnsType {
    id: 'symbolName' | 'companyName' | 'amountOfStocks' | 'removeSymbol',
    label: string,
    index: number
}

export enum WatchListCreatePortfolioIdType {
    symbolName = 'symbolName',
    companyName = 'companyName',
    amountOfStocks = 'amountOfStocks',
    removeSymbol = 'removeSymbol'
}