import { Box, Button, TextField, Theme, styled } from "@mui/material";

export const WatchListContainer = styled(Box)(({ theme }) => ({
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

export const WatchListWrapper = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    minHeight: '516px',
    [theme.breakpoints.up('mobileS')]: {
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        padding: '25px 25px',
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '50px 50px',
    }
}));

export const WatchLisTableContainerStyle = (theme: Theme) => ({
    backgroundColor: '#2c0951',
    maxHeight: '690px',
    width: '99.75%',
    marginTop: '30px',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderBottom: 'none'
});

export const WatchListButtonsContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    paddingTop: '20px',
    [theme.breakpoints.down('tablet')]: {
        flexDirection: 'column'
    }
}));

export const WatchListButtons = styled(Button, {
    shouldForwardProp: prop => prop !== 'marginBottom'
})<any>(({ theme, marginBottom }) => ({
    width: '100%',
    height: '56px',
    border: '1.5px solid rgba(37, 59, 227, 0.8)',
    backgroundColor: 'rgba(1, 17, 36, 0.8)',
    color: 'white',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    ...(marginBottom && {
        [theme.breakpoints.down('tablet')]: {
            marginBottom: '20px'
        }
    })
}));

export const WatchListFindSymbolTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginTop: '20px',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    '& .MuiInputBase-input': {
        color: 'white',
        zIndex: 1,  
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor:  'rgba(37, 59, 227, 0.8)',
            borderWidth: '1.5px',
            backgroundColor: 'rgba(1, 17, 36, 0.8)',
            color: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
            color: 'white',
        }
    },
    '& .MuiInputLabel-root': {
        color: 'white'
    }
}));