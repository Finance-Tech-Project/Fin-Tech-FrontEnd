import { Box, Typography, styled } from "@mui/material";

export const MainTickersHeader = styled(Typography)(({ theme }) => ({
    paddingBottom: '80px',
    color: 'RGB(255,196,0)',
    fontSize: '50px',
    fontWeight: 600,
    textAlign: 'center',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '30px',
        textAlign: 'center',
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '2.7rem',
    }
}));

export const MainFindTickerTextContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column',
    [theme.breakpoints.up('mobileS')]: {
        alignItems: 'center'
    },
}));

export const MainTickersDesc = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    [theme.breakpoints.up('mobileS')]: {
        textAlign: 'center',
        fontSize: '1.35rem',
    },
    [theme.breakpoints.up('laptop')]: {
       textAlign: 'left',
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('laptopL')]: {
        textAlign: 'center',
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('desktop')]: {
        textAlign: 'start',
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('desktopL')]: {
        textAlign: 'start',
        fontSize: '1.8rem',
    }
}));

export const MainTickersExplanation = styled(Typography)(({ theme }) => ({
    paddingTop: '130px',
    color: 'rgb(255, 100, 0)',
    fontSize: '20px',
    fontWeight: 300,
    textAlign: 'right',
    lineHeight: '50px',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '30px',
        textAlign: 'center',
        fontSize: '1.2rem',
        lineHeight: '20px'
    },
    [theme.breakpoints.up('mobileM')]: {
        lineHeight: '30px',
    },
    [theme.breakpoints.up('tablet')]: {
        textAlign: 'start',
        paddingTop: '15px',
    },
    [theme.breakpoints.up('laptop')]: {
        lineHeight: '35px',
        paddingTop: '10px',
    },
    [theme.breakpoints.up('laptopL')]: {
        lineHeight: '30px',
        textAlign: 'start',
        paddingTop: '15px'
    },
    [theme.breakpoints.up('desktop')]: {
        lineHeight: '30px',
        textAlign: 'start',
        paddingTop: '15px',
        fontSize: '1.4rem',
    }
}));