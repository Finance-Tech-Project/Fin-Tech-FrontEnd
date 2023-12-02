import { Box, Theme, styled } from "@mui/material";

export const HeaderMenuResponsiveContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(4, 3, 28, 1)', 
    width: '100%', 
    height: '100vh',
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    position: 'absolute', 
    top: '96px', 
    opacity: '0.9',
    zIndex: 2
}));

export const HeaderButtonsResponsiveContainer = styled(Box)(({ theme }) => ({
    width: '100%'
}));

export const GridContainerStyle = (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center'
});

