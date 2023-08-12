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
    // paddingRight: '20px',
    variant: 'text',
    textTransform: 'inherit',
    '&:hover, &:focus': {
        color: '#d55190' // 744edd
    }
}));