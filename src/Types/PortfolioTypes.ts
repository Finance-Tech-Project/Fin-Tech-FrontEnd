

export interface PortfolioType {
    userLogin: string,
    portfolioName: string,
    portfolioDate: Date,
    stocks: Map<string, number>
}