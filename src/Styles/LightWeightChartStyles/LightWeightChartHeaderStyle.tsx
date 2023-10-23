import { Box, Typography, styled } from "@mui/material";

export const MainHeaderChartContainer = styled(Box, { 
    shouldForwardProp: (prop) => prop !== 'borderTopRightRadius'
})<any>(({ theme, borderTopRightRadius }) => ({
    width: '100%',
    minHeight: '95px',
    border: '1.5px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: '#2c0951',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Inter, sans-serif',
    ...(borderTopRightRadius && {borderTopRightRadius: '0px'}),
    [theme.breakpoints.up('mobileS')]: {
        marginTop: '20px',
        flexDirection: 'column',
    },
    [theme.breakpoints.up('tablet')]: {
        marginTop: '20px',
        flexDirection: 'row'
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        marginTop: '20px',
    },
    [theme.breakpoints.up('laptopL')]: {
        flexDirection: 'row',
        marginTop: '0px'
    },
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
    ...(color ? {color: 'red'} : {color: 'white'}),
    ...(fontSize ? {fontSize: '2.5rem'} : {fontSize: '1rem'})
}));

export const MainHeaderChartTickerDescr = styled(Typography)(({ theme }) => ({
    color: 'white', 
    fontSize: '1rem', 
    paddingRight: '50px',
    '&:last-child': {
        paddingRight: '0px'
    },
    [theme.breakpoints.up('mobileS')]: {
        paddingRight: '0px',
    },
}));