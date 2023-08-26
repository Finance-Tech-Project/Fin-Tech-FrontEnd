import { Button, Typography, styled, Box, TextField, Theme } from '@mui/material';

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
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'column',
        maxWidth: '700px',
    }
}));

export const MainFindTickerTextWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('laptop')]: {
        // display: 'flex'
    }
}));

export const MainFindTickerTextGridTitleStyle = (theme: Theme) => ({
    [theme.breakpoints.up('laptop')]: {
    //    width: '55%'
    }
});

export const MainFindTickerTextGridDescrStyle = (theme: Theme) => ({
    [theme.breakpoints.up('laptop')]: {
    //    width: '50%'
    }
});

export const MainFindTickerTextContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    [theme.breakpoints.down('tablet')]: {
        alignItems: 'center',
    },
    // [theme.breakpoints.down('laptop')]: {
    //     flexDirection: 'row', 
    // }
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
    textAlign: 'center',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '30px',
        textAlign: 'center',
        fontSize: '1.7rem',
    },
    [theme.breakpoints.up('laptop')]: {
        fontSize: '2rem',
    }
}));

export const MainTickersDesc = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '30px',
    fontWeight: 400,
    [theme.breakpoints.up('mobileS')]: {
        textAlign: 'center',
        fontSize: '1.35rem',
    },
    [theme.breakpoints.up('laptop')]: {
       textAlign: 'start',
        fontSize: '1.5rem',
    }
}));



export const MainTickersExplanation = styled(Typography)(({ theme }) => ({
    paddingTop: '130px',
    color: 'rgb(255, 100, 0)',
    fontSize: '20px',
    fontWeight: 300,
    textAlign: 'right',
    lineHeight: '50px',
    [theme.breakpoints.up('mobileS')]: {
        paddingTop: '30px',
        paddingBottom: '30px',
        textAlign: 'center',
        fontSize: '1.2rem',
        lineHeight: '20px'
    },
    [theme.breakpoints.up('mobileM')]: {
        lineHeight: '30px',
    },
    [theme.breakpoints.up('laptop')]: {
        lineHeight: '45px',
    },
    [theme.breakpoints.up('tablet')]: {
        textAlign: 'center',
    }
}));