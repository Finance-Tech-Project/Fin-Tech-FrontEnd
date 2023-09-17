export interface Statistics {
    statisticName: string,
    statisticData: Map<string, string | number | null>,
    index?: number
}

export interface StatisticsColumn {
    id: "valuationMeasures" | "profitability" | "stockPriceHistory" | "shareStatistics" | "incomeStatement" | "balanceSheet" | "cashFlowStatement" | "dividendsAndSplits" | "fiscalYear",
    label?: string,
    index?: number
}

export interface StatisticsRows {
    title: string,
    value: string | number | null
}