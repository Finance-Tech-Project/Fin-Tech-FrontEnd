export const transformTextForStatistics = (word: string | undefined) => {
    
    if (word) {
        console.log(word)
        const tableTitle = word.charAt(0).toUpperCase().concat(word.slice(1, word.length)).replace(/([A-Z])/g, ' $1').trim();
        
        console.log(tableTitle)
        return tableTitle;
    }
};