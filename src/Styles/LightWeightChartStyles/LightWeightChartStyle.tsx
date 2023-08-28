import { Box, styled } from "@mui/material";

export const ChartContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxheight: '650px',
    border: '1.5px solid rgba(70, 75, 114, 0.8)'
}));

export const ChartContainerWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(44, 9, 81, 1)',
    borderBottom: '0.5px solid rgba(70, 75, 114, 0.8)'
}));

export const ChartButtonsContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    },
}));