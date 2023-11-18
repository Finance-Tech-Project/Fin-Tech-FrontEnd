import { Box, Button, FormControl, styled } from "@mui/material";

export const StocksHistoricalTableContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    [theme.breakpoints.up('mobileS')]: {
        padding: '10px 20px 20px 20px'
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '40px 60px 60px 60px',
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
    },
}));

export const StocksHistoricalTableInterfaceContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px 0 0 0',
    },
    [theme.breakpoints.up('laptopL')]: {
        padding: '20px 0 20px 0',
    }
}));

export const StocksHistoricalTableFromControl = styled(FormControl)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('mobileS')]: {    
        marginBottom: '20px',
        marginTop: '20px',
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '0px',
    },
    [theme.breakpoints.up('laptopL')]: {
        marginTop: '0px',
        marginBottom: '0px',
    }
}));

export const StocksHistoricalTableApplyButton = styled(Button)(({ theme }) => ({
    width: '100%',
    variant: 'contained',
    height: '56px',
    background: 'linear-gradient(90deg, rgba(254,135,69,1) 40%, rgba(152,80,118,1) 80%, rgba(184,29,111,1) 100%)',
    zIndex: 1,
    color: 'white',
    borderRadius: '6px',
    [theme.breakpoints.up('mobileS')]: {
        marginBottom: '20px'
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '0px',
        marginBottom: '0px',
    }
}));