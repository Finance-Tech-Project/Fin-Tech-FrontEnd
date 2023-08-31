import { Box, Theme, styled } from "@mui/material";

export const HeaderMenuResponsiveContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(4, 3, 28, 1)', 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    position: 'absolute', 
    top: '96px', 
    opacity: '0.9',
    zIndex: 2
}));

export const HeaderButtonsResponsiveContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '15px',
    },
    [theme.breakpoints.up('mobileL')]: {
        paddingTop: '0px',
    }
}));

export const GridContainerStyle = (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
        justifyContent: 'center'
    }
});

export const GridLoginMenuContainerStyle = (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('mobileS')]: {
        justifyContent: 'space-around'
    }
});