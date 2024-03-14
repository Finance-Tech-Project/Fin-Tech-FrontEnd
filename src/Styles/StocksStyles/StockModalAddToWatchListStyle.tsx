import { Box, styled } from "@mui/material";

export const StockModalAddToWatchListContainer = styled(Box)(({ theme }) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#2c0951',
    border: '2px solid rgba(37, 59, 227, 0.8)',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    padding: '20px'
}));