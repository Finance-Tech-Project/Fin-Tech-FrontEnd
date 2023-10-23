import { Box, styled } from "@mui/material";

export const StocksChartContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    paddingBottom: '61px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('mobileS')]: {
        padding: '60px 30px 60px 30px'
    },
    [theme.breakpoints.up('mobileL')]: {
        padding: '60px 40px 60px 40px'
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '60px'
    },
}));

export const StocksChartSearchTickerContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '20px'
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: '50px', 
    }
}));

export const StockChartButtonsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        width: '50%'
    },
    [theme.breakpoints.up('laptopL')]: {
        width: '40%'
    },
    [theme.breakpoints.up('desktop')]: {
        width: '30%'
    }
}));