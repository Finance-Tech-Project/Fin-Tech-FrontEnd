import { Box, Typography, styled } from "@mui/material";

export const AccountContainer = styled(Box)(({ theme }) => ({
    minHeight: '720px',
    // backgroundColor: 'rgba(49, 9, 81, 0.8)',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.up('desktop')]: {
        minHeight: '720px',
    },
    [theme.breakpoints.up('desktopL')]: {
        minHeight: '812px',
    }
}));

export const AccountTitle = styled(Typography)(({ theme }) => ({
    color: ' rgba(255, 196, 0, 1)',
    fontSize: '1.8rem',
    fontWeight: 600,
    textShadow: '5px 5px 6px #ADC5BD',
    textAlign: 'start',
    // paddingTop: '30px'
}));

export const AccountTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '1.8rem'
}));

