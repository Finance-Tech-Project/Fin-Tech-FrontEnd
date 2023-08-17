import  { Box, Button, styled } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '96px',
    backgroundColor: 'rgba(4, 3, 28, 1)',
    display: 'flex',
    alignItems: 'center'
}));

export const HeaderButtonsStyle = styled(Button)(({ theme }) => ({
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'Inter, sans-serif',
    // paddingRight: '35px',
    padding: 0,
    variant: 'text',
    textTransform: 'inherit',
    textAlign: 'center',
    '&:hover, &:focus, &:active': {
        boxShadow: 'none',
        color: '#d55190', // 744edd
        backgroundColor: 'rgba(4, 3, 28, 1)' 
    },
    [theme.breakpoints.down('laptopL')]: {
        fontSize: '18px',
    }
   
}));


