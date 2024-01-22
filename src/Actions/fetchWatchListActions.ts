import { FetchConstants, FetchConstantsForWatchListPortfolio } from "../Enums/Enums";
import { AppDispatch } from "../app/store";

export const addSymbolToWatchList = (login: string, token: string, symbol: string) => {
    return async (dispatch: AppDispatch) => {
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
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                console.log("Status 200");
            }
        } catch (error) {

        }
    }
};