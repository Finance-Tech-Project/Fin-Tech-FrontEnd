import { Button, Typography, styled, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export const MainHeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('tablet')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

export const MainHeader = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    fontSize: '64px',
    lineHeight: '80px',
    color: 'white',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '54px',
        lineHeight: '60px',
    },
    [theme.breakpoints.down('tablet')]: {
        textAlign: 'center'
    },
    [theme.breakpoints.down('mobileL')]: {
        fontSize: '38px',
        lineHeight: '40px',
    }
}));

export const MainDescr = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '30px',
    color: 'white',
    paddingTop: '10px',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '20px',
        lineHeight: '20px',
    },
    [theme.breakpoints.down('mobileL')]: {
       
        textAlign: 'center'
    }
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

export const MainImagePngContainer = styled(Box)(({ theme }) => ({
    width: '80%',
    paddingTop: '20px', 
    [theme.breakpoints.down('laptopL')]: {
        width: '120%'
    },
    [theme.breakpoints.down('tablet')]: {
        width: '20%'
    }
}));

export const MainImagePng = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '100%'
}));

export const MainButtonsLink = styled(Button)(({ theme }) => ({
    maxWidth: '432px',
    height: '176px',
    borderRadius: '14px',
    backgroundColor: '#383393',
    variant: 'contained',
    '&:hover': {
        boxShadow: '17px 17px 20px 2px rgba(0,11,122,0.89)',
        marginTop: '5px',
        backgroundColor: 'rgba(56, 51, 147, 0.5)'
    },
    [theme.breakpoints.down('laptop')]: {
        height: '136px',
    }
}));

export const MainButtonsLinkTextContainer = styled(Box)(({ theme }) => ({
    padding: '0px 33px',
    [theme.breakpoints.down('laptop')]: {
        padding: '0px 23px',
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
    textAlign: 'start',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '13px',
        lineHeight: '10px',
    }
}));

export const MainButtonsLinkTextHeader = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '30px',
    paddingTop: '25px',
    textAlign: 'start',
    [theme.breakpoints.down('laptop')]: {
        fontSize: '38px',
        lineHeight: '20px',
    }
}));

export const MainButtonsLinkIconNumberContainer = styled(Box)(({ theme }) => ({
    position: 'absolute', 
    right: '28px', 
    top: '20px',
    [theme.breakpoints.down('laptop')]: {
        right: '15px', 
        top: '10px'
    }
}));

