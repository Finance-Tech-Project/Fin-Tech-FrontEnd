

export interface PortfolioType {
    userLogin: string,
    portfolioName: string,
    portfolioDate: string,
    stocks: {[k: string]: number}
}