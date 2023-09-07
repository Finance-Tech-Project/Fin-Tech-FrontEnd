import { Typography, styled, Box, TextField, TableContainer } from '@mui/material';

export const MainFindTickerContainer = styled(Box)(({ theme }) => ({
    paddingTop: '50px',
    paddingBottom: '50px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.down('laptop')]: {
        paddingBottom: '50px'
    },
    [theme.breakpoints.down('desktopL')]: {
        paddingBottom: '50px'
    }
}));

export const MainFindTickerTextFieldContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    height: '100%',
    [theme.breakpoints.up('mobileL')]: {
        flexDirection: 'column',
        maxWidth: '100%',
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'column',
        maxWidth: '100%',
    }
}));

export const MainFindTickerTableContainer = styled(TableContainer)(({ theme }) => ({
    width: '100%',
    minHeight: '682px',
    // height: '607.5px',
    backgroundColor: '#2c0951',
    // [theme.breakpoints.up('laptop')]: {
    //     height: '682px',
    // },
    // [theme.breakpoints.up('laptopL')]: {
    //     height: '607.5px',
    // },
    // [theme.breakpoints.up('desktop')]: {
    //     height: '607.5px',
    // }
}));

export const MainTickersTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    paddingBottom: '20px',
    // paddingTop: '20px',
    '.MuiInputBase-input': {
        color: 'white',
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
        },
    },
    '& .MuiFormLabel-root': {
        color: 'white',
    },
    '& .MuiButtonBase-root': {
        color: 'white',
    }
}));

export const MainTickersTextFieldHeader = styled(Typography)(({ theme }) => ({
    color: 'RGB(255,196,0)',
    fontSize: '20px',
    paddingLeft: '40px',
}));





