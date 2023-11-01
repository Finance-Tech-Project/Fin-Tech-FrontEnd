import { Box, styled } from "@mui/material";
import Analytic_BG from '../../Images/MainBG_6.jpg';

export const AnalyticContainer = styled(Box)(({ theme }) => ({
    background: `url(${Analytic_BG}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '1200px'
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
        padding: '60px 0px'
    }
}));

export const AnalyticBlackoutContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	minHeight: '1200px',
	background: 'rgba(1, 1, 25, 0.5)'
}));