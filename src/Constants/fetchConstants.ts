import { getPeriod } from "../Functions/getPeriod";

export const BASE_URL = "http://fin-tech.eu-north-1.elasticbeanstalk.com";
export const QUOTE_HISTORY = "/quote/history";
export const START = "/start";
export const SYMBOLS = "/symbols";
export const SEARCH_SYMBOLS = "/searchSymbol/?search=";
export const STATISTICS = "/statistics?ticker=";
export const DEFAULT_DATE_FROM = getPeriod(2)[0];
export const DEFAULT_DATE_TO = getPeriod(2)[1];
export const ANALYTICS_AVG = "/analitics/movAvg?";
export const ANALYTICS_SIMPLE_INCOME = "/analitics/simpleIncome?";

// /analitics/simpleIncome?dateFrom=2023-01-01&dateTo=2023-09-20&ticker=AAPL&period=30