import { Box, styled } from "@mui/material";

export const ChartContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    maxheight: '650px',
    border: '2px solid rgba(70, 75, 114, 0.8)'
}));

export const ChartContainerWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(44, 9, 81, 1)',
    borderBottom: '0.5px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.up('laptop')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptopL')]: {
        flexDirection: 'row'
    },
}));

export const ChartButtonsContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    }
}));

export const HeaderItemDescrContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    [theme.breakpoints.up('mobileL')]: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));