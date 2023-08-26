import { Box, styled } from "@mui/material";

export const ChartContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxheight: '650px',
    border: '1.5px solid rgba(121, 208, 13, 0.8)'
}));

export const ChartContainerWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(23, 27, 27, 1)',
    borderBottom: '0.5px solid rgba(86, 92, 92, 0.7)'
}));

export const ChartContainerSeriesButtonsContainer = styled(Box)(({ theme }) => ({

    [theme.breakpoints.up('mobileS')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    [theme.breakpoints.up('mobileM')]: {
        width: '100%',
        justifyContent: 'space-between',
    },
}));