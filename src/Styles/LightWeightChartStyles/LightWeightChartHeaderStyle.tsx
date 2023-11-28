import { Box, Typography, styled } from "@mui/material";

export const MainHeaderChartContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '103px',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderBottom: '0.5px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: '#2c0951',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Inter, sans-serif',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    }
}));

export const MainHeaderChartTickerNameContainer = styled(Box)(({ theme }) => ({
    minWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '25px',
    [theme.breakpoints.up('mobileS')]: {
        paddingLeft: '0px',
        paddingTop: '20px',
        textAlign: 'center',
    },
    [theme.breakpoints.up('tablet')]: {
        paddingTop: '10px',
        textAlign: 'start',
        paddingLeft: '20px',
        minWidth: '150px'
    },
    [theme.breakpoints.up('laptop')]: {
        textAlign: 'start',
        minWidth: '250px'
    },
    [theme.breakpoints.up('laptopL')]: {
        textAlign: 'start',
        paddingLeft: '20px',
    }
}));

export const MainHeaderChartTickerDescrContainer = styled(Box)(({ theme }) => ({
    maxWidth: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column',
        paddingBottom: '20px',
        width: '100%',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        paddingBottom: '0px',
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}));

export const MainHeaderChartTickerDescrWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '70px',
    [theme.breakpoints.up('mobileS')]: {
        alignContent: 'space-between',
        width: '90%'
    },
    [theme.breakpoints.up('mobileM')]: {
        width: '80%'
    },
    [theme.breakpoints.up('tablet')]: {
        width: '45%'
    },
    [theme.breakpoints.up('laptop')]: {
        width: '40%'
    },
    [theme.breakpoints.up('laptopL')]: {
        width: '45%'
    },
    [theme.breakpoints.up('desktop')]: {
        width: '30%'
    },
    [theme.breakpoints.up('desktopL')]: {
        width: '40%'
    }
}));

export const MainHeaderChartTickerPriceContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

export const MainHeaderChartTickerName = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'fontSize'
})<any>(({ theme, color, fontSize }) => ({
    lineHeight: '30px',
    paddingTop: '5px',
    ...(color ? { color: 'red' } : { color: 'white' }),
    ...(fontSize ? { fontSize: '2.5rem' } : { fontSize: '1rem' })
}));

export const MainHeaderChartTickerDescr = styled(Typography)(({ theme }) => ({
    color: 'white',
    paddingRight: '50px',
    '&:last-child': {
        paddingRight: '0px'
    },
    [theme.breakpoints.up('mobileS')]: {
        fontSize: '0.92rem',
        paddingRight: '0px',
    },
    [theme.breakpoints.up('mobileL')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '1.3rem'
    }
}));

