export interface WatchListCreatePortfolioType {
    symbolName: string,
    companyName: string,
    amountOfStocks: JSX.Element | null,
    removeSymbol: JSX.Element | null
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