import { FetchConstants, FetchConstantsForWatchListPortfolio } from "../Enums/Enums";
import { PortfolioType } from "../Types/PortfolioTypes";
import { WatchListType } from "../Types/WatchListTypes";

export const addSymbolToWatchList = async (login: string, token: string, symbol: string) => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL +
            FetchConstantsForWatchListPortfolio.PORTFOLIO +
            FetchConstantsForWatchListPortfolio.ADD_TO_WATCHLIST +
            FetchConstantsForWatchListPortfolio.USER_NAME + login +
            FetchConstantsForWatchListPortfolio.SYMBOL + symbol
            }`, {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok || response.status === 201) {
            return response;
        }
    } catch (error) {
      
    }
};

export const getWatchList = async (login: string) => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL +
            FetchConstantsForWatchListPortfolio.PORTFOLIO +
            FetchConstantsForWatchListPortfolio.WATCHLIST +
            FetchConstantsForWatchListPortfolio.USER_NAME + login
            }`
        );

        if (response.ok) {
            const data: Array<WatchListType> = await response.json();
            return data;
        }
    } catch (error) {

    }
};

export const removeSymbolsFromWatchList = async (login: string, token: string, symbols: Array<string>) => {
    try {
        const response = await fetch(`${
            FetchConstants.BASE_URL + 
            FetchConstantsForWatchListPortfolio.PORTFOLIO + 
            FetchConstantsForWatchListPortfolio.REMOVE_SYMBOLS_FROM_WATCHLIST + 
            FetchConstantsForWatchListPortfolio.USER_NAME + login
        }`, {
            method: 'DELETE',
            body: JSON.stringify(symbols),
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
           const res: Array<WatchListType> = await response.json();
           return res;
        }
    } catch (error) {
        
    }
};

export const createPortfolio = async (portfolio: PortfolioType) => {
    try {
        
    } catch (error) {
        
    }
};