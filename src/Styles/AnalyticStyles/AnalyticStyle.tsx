import { Box, Button, styled } from "@mui/material";
import Analytic_BG from '../../Images/MainBG_6.jpg';

export const AnalyticContainer = styled(Box)(({ theme }) => ({
    background: `url(${Analytic_BG}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '1110px'
}));

export const AnalyticChartContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('mobileS')]: {
        padding: '20px 20px'
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '60px 60px'
    },
    [theme.breakpoints.up('laptop')]: {
        padding: '60px 0px 70px 0px'
    }
}));

export const AnalyticBlackoutContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	minHeight: '1110px',
	background: 'rgba(1, 1, 25, 0.5)'
}));

export const AnalyticButtons = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'marginTopForTwoStocksButtons'
})<any>(({ theme, marginTopForTwoStocksButtons }) => ({
    width: '100%',
    variant: 'contained',
    height: '56px',
    background: 'linear-gradient(90deg, rgba(254,135,69,1) 40%, rgba(152,80,118,1) 80%, rgba(184,29,111,1) 100%)',
    zIndex: 1,
    color: 'white',
    borderRadius: '6px',
    [theme.breakpoints.up('mobileS')]: {
        marginBottom: '20px',
        ...(marginTopForTwoStocksButtons && {marginTop: '20px'})
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '20px'
    },
    [theme.breakpoints.up('laptopL')]: {
        marginTop: '0px',
        marginBottom: '0px',
    },
}));