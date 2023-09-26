import { Box, styled } from "@mui/material";
import Analytic_BG from '../../Images/MainBG_6.jpg';

export const AnalyticContainer = styled(Box)(({ theme }) => ({
    background: `url(${Analytic_BG}) center center/cover no-repeat`,
    width: '100%',
    height: '100vh',
}));

export const AnalyticBlackoutContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100vh',
	background: 'rgba(1, 1, 25, 0.5)'
}));