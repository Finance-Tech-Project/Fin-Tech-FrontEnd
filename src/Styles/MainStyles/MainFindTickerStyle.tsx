import { Typography, styled, Box, TextField, Theme } from '@mui/material';

export const MainFindTickerContainer = styled(Box)(({ theme }) => ({
    paddingTop: '50px',
    height: '100%', 
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
       flexDirection: 'column'
    }
}));

export const MainFindTickerTextFieldContainer = styled(Box)(({ theme }) => ({
    display: 'flex', 
    flexDirection: 'column', 
    maxWidth: '500px',
    [theme.breakpoints.up('mobileL')]: {
        flexDirection: 'column',
        maxWidth: '100%',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'column',
        maxWidth: '100%',
    }
}));

export const MainTickersTextField = styled(TextField)(({ theme }) => ({
    paddingBottom: '20px',
    paddingTop: '20px',
    '.MuiInputBase-input': {
        color: 'white',
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(121, 208, 13, 0.8)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(121, 208, 13, 0.8)',
        },
    },
}));

export const MainTickersTextFieldHeader = styled(Typography)(({ theme }) => ({
    color: 'RGB(255,196,0)',
    fontSize: '20px',
    paddingLeft: '40px',
}));





