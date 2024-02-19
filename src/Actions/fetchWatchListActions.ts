import { FetchConstants, FetchConstantsForWatchListPortfolio } from "../Enums/Enums";
import { WatchListType } from "../Types/WatchListTypes";
import { AppDispatch, RootState } from "../app/store";

export const addSymbolToWatchList = async (login: string, token: string, symbol: string) => {
    try {
        const response = await fetch(`${
                FetchConstants.BASE_URL +
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
};

export const getWatchList = async (login: string) => {
    try {
        const response = await fetch(`${FetchConstants.BASE_URL +
            FetchConstantsForWatchListPortfolio.PORTFOLIO +
            FetchConstantsForWatchListPortfolio.WATCHLIST +
            FetchConstantsForWatchListPortfolio.USER_NAME + login
            }`);

        if (response.ok) {
            const data: Array<WatchListType> = await response.json();
            console.log(data)
            return data;
        }
    } catch (error) {

    }
};