import { FetchConstants, FetchConstantsForWatchListPortfolio } from "../Enums/Enums";
import { PortfolioType } from "../Types/PortfolioTypes";

export const getAllUserPortfolios = async (userName: string) => {
    try {
        const response = await fetch(`${
            FetchConstants.BASE_URL + 
            FetchConstantsForWatchListPortfolio.PORTFOLIO + "/" + userName
        }`);

        if (response.ok) {
            const res: Array<PortfolioType> = await response.json();
            // console.log(res)
            return res;
        }
    } catch (error) {
        
    }
};