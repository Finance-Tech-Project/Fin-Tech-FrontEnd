import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

export const myAccountPanelInterfaceButtons = [
    {
        title: 'Account',
        route: 'account',
        icon: <ManageAccountsOutlinedIcon />
    },
    {
        title: 'Watchlist',
        route: 'watchlist',
        icon: <FavoriteBorderOutlinedIcon />
    },
    {
        title: 'Portfolio',
        route: 'portfolio',
        icon: <FolderOpenOutlinedIcon />
    }
];