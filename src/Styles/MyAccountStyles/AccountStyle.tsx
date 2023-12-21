import { Box, Button, Typography, styled } from "@mui/material";

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

export const AccountButtonUpdate = styled(Button)(({ theme }) => ({
    width: '100%',
    height: '56px',
    border: '1.5px solid rgba(37, 59, 227, 0.8)',
    backgroundColor: 'rgba(1, 17, 36, 0.8)',
    color: 'white',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    marginTop: '20px'
}));

