import { getDefaultPeriod } from "../Functions/getDefaultPeriod";

export const MAIN_DATA = "main_data";
export const VOLUME_DATA = "volume_data";

export const BASE_URL = "http://fin-tech.eu-north-1.elasticbeanstalk.com";
export const ALL_SYMBOLS = "/allsymbols";
export const QUOTE_HISTORY = "/quote/history";
export const START = "/start";
export const SYMBOLS = "/symbols";

export const DEFAULT_DATE_FROM = getDefaultPeriod()[0];
export const DEFAULT_DATE_TO = getDefaultPeriod()[1];
