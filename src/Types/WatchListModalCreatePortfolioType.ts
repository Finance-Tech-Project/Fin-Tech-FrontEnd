export interface WatchListCreatePortfolioType {
    symbolName: string,
    companyName: string,
    amountOfStocks: JSX.Element,
    removeSymbol: JSX.Element
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