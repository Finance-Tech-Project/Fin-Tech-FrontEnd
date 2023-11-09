import { Box, Theme, styled } from "@mui/material";

export const TwoStocksHeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex'
}));

export const TwoStocksHeaderItem = styled(Box)(({ theme }) => ({
    width: '50%', 
    display: 'flex', 
    alignItems: 'center'
}));

export const TwoStocksHeaderItemGridContainerStyle = (theme: Theme) => ({
    width: '100%', 
    display: 'flex', 
    alignItems: 'flex-end'
});
   