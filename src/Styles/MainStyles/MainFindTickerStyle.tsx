import { Typography, styled, Box, TextField, TableContainer } from '@mui/material';

export const MainTickersTableContainer = styled(Box)(({ theme }) => ({
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

export const MainTickersTableWrapper = styled(Box)(({ theme }) => ({
    width: '85%',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    padding: '40px',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    [theme.breakpoints.up('mobileS')]: {
        width: '65%',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
    [theme.breakpoints.up('mobileM')]: {
        width: '70%',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
    [theme.breakpoints.up('mobileL')]: {
        width: '70%',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
    [theme.breakpoints.up('tablet')]: {
        width: '85%',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
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
    minHeight: '685px',
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





