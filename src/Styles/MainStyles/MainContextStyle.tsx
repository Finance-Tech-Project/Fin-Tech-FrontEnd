import { Button, Typography, styled, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export const MainHeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    [theme.breakpoints.up('mobileM')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    [theme.breakpoints.up('tablet')]: {
        alignItems: 'center',
        '&:last-child': {
            alignItems: 'center',
        }
    },
    [theme.breakpoints.up('laptop')]: {
        alignItems: 'flex-start',
        '&:last-child': {
            alignItems: 'flex-start',
        }
    },
}));

export const MainHeader = styled(Typography)(({ theme }) => ({
    fontWeight: 800,
    lineHeight: '80px',
    color: 'white',
    [theme.breakpoints.up('mobileS')]: {
        fontSize: '28px',
        lineHeight: '40px',
        textAlign: 'center'
    },
    [theme.breakpoints.up('mobileM')]: {
        fontSize: '32px',
        lineHeight: '40px',
        
    },
    [theme.breakpoints.up('mobileL')]: {
        textAlign: 'center'
        
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '48px',
        textAlign: 'center'
        
    },
    [theme.breakpoints.up('laptop')]: {
        textAlign: 'start'
    },
    [theme.breakpoints.up('laptopL')]: {
        textAlign: 'start',
        lineHeight: '60px',
    },
    [theme.breakpoints.up('desktopL')]: {
        textAlign: 'start',
        lineHeight: '80px',
        fontSize: '64px',
    },
}));

export const MainDescr = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '30px',
    color: 'white',
    paddingTop: '10px',
    [theme.breakpoints.up('mobileS')]: {
        lineHeight: '25px',
        fontSize: '18px',
        textAlign: 'center'
    },
    [theme.breakpoints.up('mobileM')]: {
        lineHeight: '27px',
        fontSize: '20px',
        textAlign: 'center'
    },
    [theme.breakpoints.up('tablet')]: {
        textAlign: 'center'
    },
    [theme.breakpoints.up('laptopL')]: {
        fontSize: '22px',
        textAlign: 'start'
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '24px'
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '26px',
        lineHeight: '40px'
    },
}));

export const MainButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'marginTop'
})<any>(({ theme, marginTop }) => ({
    marginTop: '50px',
    variant: 'contained',
    width: '200px',
    height: '54px',
    background: 'linear-gradient(90deg, rgba(254,135,69,1) 40%, rgba(152,80,118,1) 80%, rgba(184,29,111,1) 100%)',
    zIndex: 1,
    color: 'white',
    borderRadius: '6px',
    ...(marginTop && {marginTop: '0px'}),
    [theme.breakpoints.up('mobileS')]: {
        marginTop: '10px'
    },
    [theme.breakpoints.up('mobileM')]: {
        marginTop: '10px',
        ...(marginTop && {marginTop: '20px'})
    },
    [theme.breakpoints.up('tablet')]: {
        marginTop: '45px',
        ...(marginTop && {marginTop: '20px'})
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '20px',
        ...(marginTop && {marginTop: '20px'})
    },
    [theme.breakpoints.up('laptopL')]: {
        padding: '0px',
       ...(marginTop && {marginTop: '0px'})
    },
    [theme.breakpoints.up('desktop')]: {
        marginTop: '10px',
        ...(marginTop && {marginTop: '0px'})
    },
    [theme.breakpoints.up('desktopL')]: {
        marginTop: '15px',
        ...(marginTop && {marginTop: '0px'})
    },
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

export const MainButtonsContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    paddingTop: '167px',
    [theme.breakpoints.up('laptop')]: {
        paddingTop: '127px',
    },
    [theme.breakpoints.up('desktop')]: {
        paddingTop: '167px',
    }
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
    [theme.breakpoints.up('laptop')]: {
        height: '156px',
    },
    [theme.breakpoints.up('desktop')]: {
        height: '176px',
    }
}));

export const MainButtonsLinkTextContainer = styled(Box)(({ theme }) => ({
    padding: '0px 33px',
    [theme.breakpoints.up('laptop')]: {
        padding: '0px 23px',
    },
    [theme.breakpoints.up('laptopL')]: {
        padding: '0px 27px',
    },
    [theme.breakpoints.up('desktop')]: {
        padding: '0px 33px',
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
    [theme.breakpoints.up('laptop')]: {
        fontSize: '12px',
        lineHeight: '20px',
    },
    [theme.breakpoints.up('laptopL')]: {
        fontSize: '15px',
        lineHeight: '22px',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '17px',
        lineHeight: '22px',
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '20px',
        lineHeight: '30px',
    }
}));

export const MainButtonsLinkTextHeader = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '30px',
    paddingTop: '25px',
    textAlign: 'start',
    [theme.breakpoints.up('laptop')]: {
        fontSize: '38px',
        lineHeight: '20px',
    }
}));

export const MainButtonsLinkIconNumberContainer = styled(Box)(({ theme }) => ({
    position: 'absolute', 
    right: '28px', 
    top: '20px',
    [theme.breakpoints.up('laptop')]: {
        right: '15px', 
        top: '15px'
    },
    [theme.breakpoints.up('desktop')]: {
        right: '17px', 
        top: '25px'
    },
    [theme.breakpoints.up('desktopL')]: {
        right: '20px', 
        top: '27px',
    }
}));

