import { Box, Button, Typography, styled } from "@mui/material";

export const AccountContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '700px',
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '725px',
    },
    [theme.breakpoints.up('desktopL')]: {
        minHeight: '812px',
    }
}));

export const AccountWrapper = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    padding: '50px 50px',
    minHeight: '516px'
}));

export const AccountItemContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '30px',
    [theme.breakpoints.up('mobileL')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    },
}));

export const AccountTitle = styled(Typography)(({ theme }) => ({
    color: ' rgba(255, 196, 0, 1)',
    fontSize: '1.8rem',
    fontWeight: 600,
    textShadow: '5px 5px 6px #ADC5BD',
    textAlign: 'start'
}));

export const AccountTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '1.8rem',
    [theme.breakpoints.up('mobileL')]: {
        textAlign: 'center',
    },
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

