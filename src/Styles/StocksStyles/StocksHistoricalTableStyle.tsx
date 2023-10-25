import { Box, FormControl, styled } from "@mui/material";

export const StocksHistoricalTableContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    [theme.breakpoints.up('mobileS')]: {
        padding: '30px 20px 30px 20px',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '50px 60px 60px 60px',
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
    },
}));

export const StocksHistoricalTableInterfaceContainer = styled(Box)(({ theme }) => ({
    padding: '20px 0 20px 0',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));

export const StocksHistoricalTableFromControl = styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        width: '100%',
        marginTop: '20px'
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '0px',
        width: '160px'
    }
}));