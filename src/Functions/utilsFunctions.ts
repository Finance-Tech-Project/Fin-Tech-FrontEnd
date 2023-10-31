import { IntervalsAbbreviation } from "../Enums/Enums";
import { AnalyticInterface } from "../Types/AnalyticTypes";
import { SymbolData } from "../Types/DataReducerTypes";
import { TickerDataType } from "../Types/TickersTypes";

export const transformTextForStatistics = (word: string | undefined) => {
    if (word) {
        let tableTitle = word.charAt(0).toUpperCase().concat(word.slice(1, word.length)).replace(/([A-Z])/g, ' $1').trim();
        if (tableTitle.includes("P E")) {
            tableTitle = tableTitle.replace(/(\P \\E)/g, 'P/E');
        }
        if (tableTitle.includes("Peg")) {
            tableTitle = tableTitle.replace("Peg", 'PEG');
        }
        if (tableTitle.includes(" To ")) {
            tableTitle = tableTitle.replace(/(\\ T\\o )/g, '/');
        }
        if (tableTitle.includes("Ebitda")) {
            tableTitle = tableTitle.replace("Ebitda", 'EBITDA');
        }
        if (tableTitle.includes("Eps")) {
            tableTitle = tableTitle.replace("Eps", 'EPS');
        }
        let pattern = /(\d\d\w+)/g
        if (tableTitle.match(pattern)) {
            const days = tableTitle.split(/\d/)
            days[2] = days[2].replace("d", "D");
            days[1] = "10";
            tableTitle = days.join(" ");
        }
        pattern = /(\d+\s\w+)|(\d+\w+)/g
        if (tableTitle.match(pattern)) {
            tableTitle = tableTitle.replace(pattern, ' (' + tableTitle.match(pattern)?.toString() + ')');
        }
        if (tableTitle.includes("Sand P")) {
            tableTitle = tableTitle.replace("Sand P", 'S&P500');
        }
        if (tableTitle.includes("Fifty Tow ")) {
            tableTitle = tableTitle.replace("Fifty Tow ", '52 ');
        }
        if (tableTitle.includes("Fifty ")) {
            tableTitle = tableTitle.replace("Fifty ", '50 ');
        }
        if (tableTitle.includes("Two Hundred ")) {
            tableTitle = tableTitle.replace("Two Hundred ", '200 ');
        }
        if (tableTitle.includes("(52 Week) ")) {
            tableTitle = tableTitle.replace("(52 Week) ", ' 52-Week ');
        }
        if (tableTitle.includes("Percent")) {
            tableTitle = tableTitle.replace("Percent", '%');
        }
        if (tableTitle.includes("Prev Month")) {
            const currentDate = new Date();
            const beforeOneMonth = new Date();
            beforeOneMonth.setMonth(currentDate.getMonth() - 2)
            const arr = beforeOneMonth.toString().split(" ").splice(1, 3);
            arr[0] = arr[0] + ",";
            const res = arr.join(" ");
            tableTitle = tableTitle.replace("Prev Month", "(".concat(res).concat(")"));
        }
        return tableTitle;
    }
};

export const transformDateForStatistics = (date: string | number | null) => {
    let pattern = /\d+.\d+.\d+/g;
    if (typeof date === "string") {
        if (date.match(pattern)) {
            return date.split("-").reverse().join("-")
        }
    }
    return date;
};

export const transformDate = (date: string) => {
    const arr = new Date(date).toString().split(" ");
    const res = arr[1] + " " + arr[2] + ", " + arr[3];
    return res;
};

export const findMaxMinPrice = (symbolData: TickerDataType[], param: string) => {
    return param === "min" ? symbolData.map((elem) => elem.low).sort((a, b) => a - b)[0] : symbolData.map((elem) => elem.high).sort((a, b) => b - a)[0];
};

export const transformFirstLetterToUpperCase = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export const transformVolume = (volume: string | number) => {
    if (typeof volume === 'number') {
        const res = Intl.NumberFormat().format(volume).replace(/\s/g, ',')
        return res;
    }
}

export const getDataInInterval = (data: SymbolData, interval: string) => {
    return interval === IntervalsAbbreviation.Dayily
        ? data.dailyData : interval === IntervalsAbbreviation.Weekly
            ? data.weeklyData : interval === IntervalsAbbreviation.Monthly
                ? data.monthlyData : interval === IntervalsAbbreviation.Yearly
                    ? data.yearlyData : data.dailyData;
};

export const getColorForLightWeightHeader = (simpleIncome: AnalyticInterface, volatility: AnalyticInterface, choiceColor: boolean) => {
    if (!choiceColor) {
        return (simpleIncome.period === 0 && volatility.period === 0 && simpleIncome.color)
            || simpleIncome.period > 0 ? simpleIncome.color : volatility.color;
    } else {
        return (simpleIncome.period === 0 && volatility.period === 0 && simpleIncome.colorToCompare)
            || simpleIncome.period > 0 ? simpleIncome.colorToCompare : volatility.colorToCompare;
    }
};