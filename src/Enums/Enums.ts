import { getPeriod } from "../Functions/getPeriod";

export enum ChartSeriesNames {
    CandlesSeries = "candles", 
    LineSeries = "line", 
    AreaSeries = "area",  
    BarSeries = "bar", 
    LineSeriesForSimpleIncome = "simpleIncome"
}

export enum IntervalsAbbreviation {
    Dayily = "1D",
    Weekly = "1W",
    Monthly = "1M",
    Yearly = "1Y",
}

export enum IntervalsFullName {
    Dayily = "Dayily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Yearly = "Yearly",
}

export enum FetchConstants {
    BASE_URL = "http://fin-tech.eu-north-1.elasticbeanstalk.com",
    START = "/start",
    SYMBOLS = "/symbols",
    SEARCH_SYMBOLS = "/searchSymbol/?search=",
    QUOTE_HISTORY = "/quote/history?",
    STATISTICS = "/statistics?ticker=",
    ANALYTICS_AVG = "/analitics/movAvg?",
    ANALYTICS_SIMPLE_INCOME = "/analitics/simpleIncome?",
    DATE_FROM = "dateFrom=",
    DATE_TO = "&dateTo=",
    TICKER = "&ticker=",
    PERIOD = "&period="
}

export enum SimpleIncomeDefaultPeriod {
    Period = 1500
}

export const DEFAULT_DATE_FROM = getPeriod(2)[0];
export const DEFAULT_DATE_TO = getPeriod(2)[1];