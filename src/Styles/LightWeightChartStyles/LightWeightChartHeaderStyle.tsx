import { Box, Typography, styled } from "@mui/material";

export const MainHeaderChartContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '95px',
    border: '1.5px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: '#2c0951',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    [theme.breakpoints.up('mobileS')]: {
        marginTop: '20px',
        flexDirection: 'column',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    },
}));

export const MainHeaderChartTickerNameContainer = styled(Box)(({ theme }) => ({
    minWidth: '200px', 
    display: 'flex', 
    flexDirection: 'column',
    paddingLeft: '20px',
    [theme.breakpoints.up('mobileS')]: {
        paddingLeft: '0px',
        paddingTop: '10px',
        textAlign: 'center',
    },
    [theme.breakpoints.up('tablet')]: {
        paddingTop: '10px'
    }
}));

export const MainHeaderChartTickerDescrContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
}));

export const MainHeaderChartTickerDescrWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '70px'
}));

export const MainHeaderChartTickerPriceContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

export const MainHeaderChartTickerName = styled(Typography, { 
    shouldForwardProp: (prop) => prop !== 'color' && prop !== 'fontSize'
})<any>(({ theme, color, fontSize }) => ({ 
    lineHeight: '30px',
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