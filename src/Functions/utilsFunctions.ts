export const transformTextForStatistics = (word: string | undefined) => {
    
    if (word) {
        // console.log(word)

        let tableTitle = word.charAt(0).toUpperCase().concat(word.slice(1, word.length)).replace(/([A-Z])/g, ' $1').trim();
        if (tableTitle.includes("P E")) {
            console.log(tableTitle.replace(/([A-Z])+/g, ' $/'))
        }
        console.log(tableTitle)
        return tableTitle;
    }
};