import { Box, Theme, styled } from "@mui/material";

export const TwoStocksHeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column',
    },
    [theme.breakpoints.up('desktop')]: {
        flexDirection: 'row',
    }
}));

export const TwoStocksHeaderItem = styled(Box)(({ theme }) => ({
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
       width: '100%', 
    },
    [theme.breakpoints.up('desktop')]: {
        width: '50%'
    },
}));

export const TwoStocksHeaderItemGridContainerStyle = (theme: Theme) => ({
    width: '100%', 
    display: 'flex', 
    alignItems: 'flex-end'
});
   