import { getPeriod } from "../../Functions/getPeriod";

export const chartButtonsPeriod: Array<string> = ["1D", "1W", "1M", "1Y"];
export const chartButtonsSeries: Array<string> = ["Candles", "Line", "Bar", "Area"];

export interface ChartButtonForAnalytic {
    title: string,
    dateFrom: string,
    dateTo: string
}

export const chartButtonForAnalytic: ChartButtonForAnalytic[] = [
    {
        title: "2Y",
        dateFrom: getPeriod(2)[0],
        dateTo: getPeriod(2)[1]
    },
    {
        title: "5Y",
        dateFrom: getPeriod(5)[0],
        dateTo: getPeriod(5)[1]
    },
    {
        title: "10Y",
        dateFrom: getPeriod(10)[0],
        dateTo: getPeriod(10)[1]
    },
    {
        title: "ALL",
        dateFrom: getPeriod(20)[0],
        dateTo: getPeriod(20)[1]
    },
]