export interface Statistics {
    statisticName: string,
    statisticData: Map<string, string | number | null>,
    index?: number
}

export interface StatisticsColumnType {
    id: "valuationMeasures" | 
        "profitability" | 
        "stockPriceHistory" | 
        "shareStatistics" | 
        "incomeStatement" | 
        "balanceSheet" | 
        "cashFlowStatement" | 
        "dividendsAndSplits" | 
        "fiscalYear",
    label?: string,
    index?: number
}

export interface StatisticsRows {
    title: string,
    value: string | number | null
}

export enum StatisticsColumnIdType {
    valuationMeasures = "valuationMeasures",
    profitability = "profitability",
    stockPriceHistory = "stockPriceHistory",
    shareStatistics = "shareStatistics",
    incomeStatement = "incomeStatement",
    balanceSheet = "balanceSheet",
    cashFlowStatement = "cashFlowStatement",
    dividendsAndSplits = "dividendsAndSplits",
    fiscalYear = "fiscalYear"
}