import { Box, Button, Theme, styled } from "@mui/material";

export const WatchListModalPortfolioCreateContainer = styled(Box)(({ theme }) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    backgroundColor: '#2c0951',
    border: '2px solid rgba(37, 59, 227, 0.8)',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    padding: '20px'
}));

export const WatchListModalPortfolioCreateButtons = styled(Button, {
    shouldForwardProp: prop => prop !== 'widthForTable'
})<any>(({ theme, widthForTable }) => ({
    width: '250px',
    height: '56px',
    border: '1.5px solid rgba(37, 59, 227, 0.8)',
    backgroundColor: 'rgba(1, 17, 36, 0.8)',
    color: 'white',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    ...(widthForTable && { width: '100%' })
}));

export const WatchListModalPortfolioCreateContainerStyle = (theme: Theme) => ({
    backgroundColor: '#2c0951',
    maxHeight: '550px',
    width: '99.75%',
    marginTop: '30px',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderBottom: 'none'
});

