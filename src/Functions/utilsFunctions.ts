export const transformTextForStatistics = (word: string | undefined) => {
    if (word) {
        let tableTitle = word.charAt(0).toUpperCase().concat(word.slice(1, word.length)).replace(/([A-Z])/g, ' $1').trim();
        if (tableTitle.includes("P E")) {
            tableTitle = tableTitle.replace(/(\P \E)/g, 'P/E');
        }
        if (tableTitle.includes("Peg")) {
            tableTitle = tableTitle.replace("Peg", 'PEG');
        }
        if (tableTitle.includes(" To ")) {
            tableTitle = tableTitle.replace(/(\ T\o )/g, '/');
        }
        if (tableTitle.includes("Ebitda")) {
            tableTitle = tableTitle.replace("Ebitda", 'EBITDA');
        }
        if (tableTitle.includes("Eps")) {
            tableTitle = tableTitle.replace("Eps", 'EPS');
        }
        let pattern = /(\d+\s\w+)|(\d+\w+)/g
        if (tableTitle.match(pattern)) {
            tableTitle = tableTitle.replace(pattern, '(' + tableTitle.match(pattern)?.toString() + ')');
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
        return tableTitle;
    }
};