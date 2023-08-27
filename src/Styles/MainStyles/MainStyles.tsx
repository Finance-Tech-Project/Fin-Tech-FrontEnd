import { Box, styled } from '@mui/material';
import MainBG from '../../Images/MainBG.jpg' ;
import MainBG_2 from '../../Images/MainBG_2.jpg' ;

export const MainContainer = styled(Box)(({ theme }) => ({
    background: `url(${MainBG_2}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '835px',
    [theme.breakpoints.up('mobileS')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('mobileM')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('mobileL')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('tablet')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('laptop')]: {
        minHeight: '635px',
    },
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '735px',
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '835px',
    },
}));

export const MainBackgroundColor = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '835px',
    background: 'rgba(39, 36, 36, 0.25)',
    [theme.breakpoints.up('mobileS')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('mobileM')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('mobileL')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('tablet')]: {
        minHeight: '435px',
    },
    [theme.breakpoints.up('laptop')]: {
        minHeight: '635px',
    },
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '735px',
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '835px',
    },
}));

export const MainFindTickerContainer = styled(Box)(({ theme }) => ({
    background: `url(${MainBG}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '835px',
    
}));

export const MainFindTickerBackgroundColor = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '835px',
    background: 'rgba(25, 0, 51, 0.25)',
}));

