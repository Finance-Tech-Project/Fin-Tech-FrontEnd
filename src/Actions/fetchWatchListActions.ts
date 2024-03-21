import { FetchConstants, FetchConstantsForWatchListPortfolio } from "../Enums/Enums";
import { putUserException } from "../Reducers/userExeptionsReducer";
import { PortfolioType } from "../Types/PortfolioTypes";
import { WatchListType } from "../Types/WatchListTypes";
import { AppDispatch } from "../app/store";

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
        const response = await fetch(`${FetchConstants.BASE_URL +
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

export const createPortfolio = (token: string, portfolio: PortfolioType) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstantsForWatchListPortfolio.PORTFOLIO +
                FetchConstantsForWatchListPortfolio.CREATE
                }`, {
                method: 'POST',
                body: JSON.stringify(portfolio),
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                dispatch(putUserException({
                    exceptionType: response.status,
                    exceptionMessage: '* Your portfolio succesfully created.'
                }));
                return response.status;
            } else if (response.status === 201) {
                dispatch(putUserException({
                    exceptionType: response.status,
                    exceptionMessage: `* Portfolio with name ${portfolio.portfolioName} already exists.`
                }));
                return response.status;
            }
        } catch (error) {

        }
    }
};