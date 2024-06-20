
export interface PortfolioType {
    userLogin: string,
    portfolioName: string,
    portfolioDate: string,
    stocks: Array<PortfolioStocks>
}

export interface PortfolioStocks {
    symbolName: string,
    companyName: string,
    close: number,
    amountOfStocksForUserPortfolio: number,
    sumOfAmountOfStocks: number
}

export interface PortfolioColumnsType {
    id: 'portfolioName' | 'portfolioDate' | 'portfolioPrice' | 'removePortfolio',
    label: string,
    index?: number
}

export interface PortfolioRowsType {
    portfolioName: string,
    portfolioDate: string,
    portfolioPrice: number,
    removePortfolio: JSX.Element | null
}