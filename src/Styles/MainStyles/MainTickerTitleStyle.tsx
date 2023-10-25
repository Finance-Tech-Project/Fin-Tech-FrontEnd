import { Box, Theme, Typography, styled } from "@mui/material";

export const MainTickerTitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center'
}));

export const MainTickerTitleWrapper = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    marginTop: '30px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    [theme.breakpoints.up('mobileS')]: {
        padding: '0px 20px 25px 20px',
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '40px 20px 60px 20px'
    },
    [theme.breakpoints.up('desktopL')]: {
        padding: '40px 0px 60px 0px'
    }
}));

export const MainTickersTitleHeader = styled(Typography)(({ theme }) => ({
    paddingBottom: '80px',
    color: 'RGB(255,196,0)',
    fontSize: '50px',
    fontWeight: 600,
    textAlign: 'center',
    textShadow: '5px 5px 6px #ADC5BD',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '30px',
        textAlign: 'center',
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('tablet')]: {
        paddingTop: '0px',
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '2.7rem',
    }
}));

export const MainFindTickerTitleTextContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('mobileS')]: {
        alignItems: 'center'
    },
}));

export const MainTickersTitleDesc = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    [theme.breakpoints.up('mobileS')]: {
        textAlign: 'center',
        fontSize: '1.35rem',
    },
    [theme.breakpoints.up('tablet')]: {
        textAlign: 'start',
        fontSize: '1.35rem',
    },
    [theme.breakpoints.up('laptop')]: {
        textAlign: 'left',
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('laptopL')]: {
        textAlign: 'start',
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

export const GridMainTickersTitleDescrStyle = (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    [theme.breakpoints.up('desktop')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export const MainTickersTitleExplanation = styled(Typography)(({ theme }) => ({
    paddingTop: '130px',
    color: 'rgb(255, 100, 0)',
    fontSize: '20px',
    fontWeight: 300,
    textAlign: 'right',
    lineHeight: '50px',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '10px',
        textAlign: 'center',
        fontSize: '1.2rem',
        lineHeight: '25px'
    },
    [theme.breakpoints.up('mobileM')]: {
        lineHeight: '30px',
        paddingBottom: '10px',
    },
    [theme.breakpoints.up('mobileL')]: {
        lineHeight: '30px',
        paddingBottom: '10px',
    },
    [theme.breakpoints.up('tablet')]: {
        textAlign: 'start',
        paddingTop: '15px',
        lineHeight: '25px',
        paddingBottom: '10px',
    },
    [theme.breakpoints.up('laptop')]: {
        lineHeight: '25px',
        paddingTop: '10px',
        paddingBottom: '10px',
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