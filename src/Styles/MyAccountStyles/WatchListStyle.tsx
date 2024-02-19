import { Box, styled } from "@mui/material";

export const WatchListContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '700px',
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '725px',
    },
    [theme.breakpoints.up('desktopL')]: {
        minHeight: '812px',
    }
}));

export const WatchListWrapper = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    minHeight: '516px',
    [theme.breakpoints.up('mobileS')]: {
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        padding: '25px 25px',
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '50px 50px',
    }
}));
