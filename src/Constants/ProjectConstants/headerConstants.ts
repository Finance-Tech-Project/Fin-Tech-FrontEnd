export interface HeaderButtons {
    title: string,
    route: string
}


export const headerButtons: Array<HeaderButtons> = [
    {
        title: 'Home',
        route: 'home'
    },
    {
        title: 'Market Insight',
        route: 'market_insight'
    },
    {
        title: 'Stocks',
        route: 'stocks'
    },
    {
        title: 'Analytics',
        route: 'analytics'
    },
    {
        title: 'Contacts',
        route: 'contacts'
    },
    {
        title: 'My Account',
        route: 'my_account'
    }
];


export const headerButtonsLogin: Array<string> = ['Login', 'Register'];