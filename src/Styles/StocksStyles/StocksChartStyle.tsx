import { Box, styled } from "@mui/material";

export const StocksChartContainer = styled(Box)(({ theme }) => ({
    width: '94.78%', 
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    padding: '60px',
    paddingBottom: '61px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('mobileM')]: {
        padding: '60px 40px 60px 40px'
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '60px'
    },
}));

export const StocksChartSearchTickerContainer = styled(Box)(({ theme }) => ({
    paddingBottom: '50px', 
    display: 'flex', 
    justifyContent: 'space-between',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column',
        paddingBottom: '20px'
    },
    [theme.breakpoints.up('laptop')]: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '50px', 
    },
}));

export const StockChartButtonsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '25px',
    },
    [theme.breakpoints.up('laptop')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '0px',
        width: '50%'
    },
    [theme.breakpoints.up('laptopL')]: {
        width: '40%'
    },
    [theme.breakpoints.up('desktop')]: {
        width: '30%'
    },
}));