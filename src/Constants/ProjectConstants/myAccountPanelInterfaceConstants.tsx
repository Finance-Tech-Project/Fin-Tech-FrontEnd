import { MyAccountPanelInterfaceAccountIcon, MyAccountPanelInterfaceWatchlistIcon, MyAccountPanelInterfacePortfolioIcon } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'

export const myAccountPanelInterfaceButtons = [
    {
        title: 'Account',
        icon: (param: boolean) => <MyAccountPanelInterfaceAccountIcon colorOnFocus={param}/>
    },
    {
        title: 'Watchlist',
        icon: (param: boolean) => <MyAccountPanelInterfaceWatchlistIcon colorOnFocus={param}/>
    },
    {
        title: 'Potfolio',
        icon: (param: boolean) => <MyAccountPanelInterfacePortfolioIcon colorOnFocus={param}/>
    }
];