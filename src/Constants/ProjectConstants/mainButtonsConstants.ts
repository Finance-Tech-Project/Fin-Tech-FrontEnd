import { ReactComponent as NumberOneIcon_1 } from '../../Images/SVGIcons/NumberOne_01.svg';
import { ReactComponent as NumberTwoIcon_2 } from '../../Images/SVGIcons/NumberTwo_02.svg';
import { ReactComponent as NumberThreeIcon_3 } from '../../Images/SVGIcons/NumberThree_03.svg';
import { MainButtonType } from '../../Types/MainTypes';

export const mainButtons: Array<MainButtonType> = [
    {
        description: "Exploring securities trends",
        header: "Statistics",
        icon: NumberOneIcon_1
    },
    {
        description: "SMART INVESTMENT INSIGHTS",
        header: "Analysis",
        icon: NumberTwoIcon_2
    },
    {
        description: "REAL-TIME DATA & ANALYSIS",
        header: "Stock API",
        icon: NumberThreeIcon_3
    }
];