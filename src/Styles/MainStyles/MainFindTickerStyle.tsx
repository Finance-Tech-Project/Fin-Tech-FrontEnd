import { Button, Typography, styled, Box, TextField } from '@mui/material';

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
    [theme.breakpoints.down('tablet')]: {
        flexDirection: 'column'
    }
}));

export const MainFindTickerTextContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-end',
    [theme.breakpoints.down('tablet')]: {
        alignItems: 'center',
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

export const MainTickersHeader = styled(Typography)(({ theme }) => ({
    paddingBottom: '80px',
    color: 'RGB(255,196,0)',
    fontSize: '50px',
    fontWeight: 600,
    textAlign: 'right',
    [theme.breakpoints.down('laptopL')]: {
        fontSize: '40px',
    },
    [theme.breakpoints.down('laptop')]: {
        fontSize: '25px',
        paddingBottom: '50px',
    },
    [theme.breakpoints.down('tablet')]: {
        paddingTop: '50px',
        textAlign: 'center',
    },
}));

export const MainTickersDesc = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    textAlign: 'right',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '25px',
    },
    [theme.breakpoints.down('tablet')]: {
        textAlign: 'center',
    },
}));

export const MainTickersExplanation = styled(Typography)(({ theme }) => ({
    paddingTop: '130px',
    color: 'RGB(255,100,0)',
    fontSize: '20px',
    fontWeight: 300,
    textAlign: 'right',
    lineHeight: '50px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '18px',
        lineHeight: '30px',
        paddingTop: '80px',
    }
}));