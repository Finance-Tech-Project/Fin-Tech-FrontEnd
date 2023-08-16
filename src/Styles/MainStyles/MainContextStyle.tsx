import { Button, Typography, styled } from '@mui/material';
import EastIcon from '@mui/icons-material/East';


export const MainHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800,
    fontSize: '64px',
    lineHeight: '80px',
    color: 'white'
}));

export const MainDescr = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '30px',
    color: 'white',
    paddingTop: '10px'
}));

export const MainButton = styled(Button)(({ theme }) => ({
    marginTop: '50px',
    variant: 'contained',
    width: '200px',
    height: '54px',
    background: 'linear-gradient(90deg, rgba(254,135,69,1) 40%, rgba(152,80,118,1) 80%, rgba(184,29,111,1) 100%)',
    zIndex: 1,
    color: 'white',
    borderRadius: '6px'
}));

export const MainArrowIconButton = styled(EastIcon)(({ theme }) => ({
    width: '20px',
    height: '20px',
    paddingLeft: '15px',
    paddingBottom: '3px'
}));

export const MainImagePng = styled('img')(({ theme }) => ({
    width: '420px',
    height: '320px'
}));

export const MainButtonsLink = styled(Button)(({ theme }) => ({
    width: '432px',
    height: '176px',
    borderRadius: '14px',
    backgroundColor: '#383393',
    variant: 'contained',
    '&:hover': {
        boxShadow: '17px 17px 20px 2px rgba(0,11,122,0.89)',
        marginTop: '5px',
        backgroundColor: 'rgba(56, 51, 147, 0.5)'
    }
}));

export const MainButtonsLinkTextDescr = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    textAlign: 'start'
}));

export const MainButtonsLinkTextHeader = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '30px',
    paddingTop: '10px',
    textAlign: 'start'
}));

export const MainButtonsLinkTextNumber = styled(Typography)(({ theme }) => ({
    
}));