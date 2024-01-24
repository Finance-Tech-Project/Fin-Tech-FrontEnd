import { getPeriod } from "../Functions/getPeriod";

export enum ChartSeriesNames {
    CandlesSeries = "candles", 
    LineSeries = "line", 
    AreaSeries = "area",  
    BarSeries = "bar", 
    LineSeriesForSimpleIncome = "simpleIncome",
    LineSeriesForVolatility = "volatility",
    LineSeriesForSharpRatio = "sharpRatio",
    LineSeriesForIrr = "irr"
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
    BASE_URL = "http://fintechserver.eu-north-1.elasticbeanstalk.com", 
    BASE_URL_LOCAL  = "http://localhost:5000", 
    START = "/start",
    SYMBOLS = "/symbols",
    SEARCH_SYMBOLS = "/searchSymbol/?search=",
    QUOTE_HISTORY = "/quote/history?",
    STATISTICS = "/statistics?ticker=",
    ANALYTICS = "/analytics",
    MOV_AVG = "/movAvg?",
    SIMPLE_INCOME = "/simpleIncome?",
    VOLATILITY = "/volatility?",
    SHARP_RATIO = "/sharpRatios?",
    DATE_FROM = "dateFrom=",
    DATE_TO = "&dateTo=",
    TICKER = "&ticker=",
    PERIOD = "&period=",
    YEARS = "&years=",
    DAYS = "&days="
}

export enum FetchConstantsForLoginRegister {
    ACCOUNT = "/account",
    REGISTER = "/register",
    LOGIN = "/login",
    USER = "/user",
    PASSWORD = "/password",
    RECOVERY = "recovery",
    ROLE = "/role",
    LOGOUT = "logout"
}

export enum FetchConstantsForWatchListPortfolio {
    ADD_TO_WATCHLIST = "/addToWatchList",
    PORTFOLIO = "/portfolio",
    USER_NAME = "?userName=",
    SYMBOL = "&symbol="
}

export enum DefaultPeriods {
    SimpleIncomeDefaultPeriod = 2,
    VolatilityDefaultPeriod = 500,
    SharpRatioDefaultPeriod = 2
}

export enum ComponentName {
    Stocks = "stocks",
    Analytic = "analytic",
}

export const DEFAULT_DATE_FROM = getPeriod(2)[0];
export const DEFAULT_DATE_TO = getPeriod(2)[1];