import  { Box, Button, styled } from '@mui/material';
import LensBlurRoundedIcon from '@mui/icons-material/LensBlurRounded';

export const HeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '96px',
    backgroundColor: 'rgba(4, 3, 28, 1)',
    display: 'flex',
    alignItems: 'center'
}));

export const HeaderButtonsStyle = styled(Button)(({ theme }) => ({
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'Inter, sans-serif',
    padding: 0,
    variant: 'text',
    textTransform: 'inherit',
    textAlign: 'center',
    backgroundColor: 'rgba(4, 3, 28, 1)' ,
    '&:hover, &:focus, &:active': {
        boxShadow: 'none',
        color: '#d55190', // 744edd
        backgroundColor: 'rgba(4, 3, 28, 1)' 
    },
    [theme.breakpoints.down('laptopL')]: {
        fontSize: '18px',
    }
}));

export const HeaderMenuIconButton = styled(Button)(({ theme }) => ({
    variant: 'text'
}));

export const HeaderMenuIconStyle = styled(LensBlurRoundedIcon)(({ theme }) => ({
    fontSize: '2rem',
    color: '#fff',
    '&:hover': {
        fontSize: '2.3rem',
        color: '#d55190'
    }
}));


