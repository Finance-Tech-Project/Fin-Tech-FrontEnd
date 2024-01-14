import { Avatar, Box, Typography, styled } from "@mui/material";

export const MyAccountHeaderContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '92px',
    backgroundColor: 'rgba(4, 3, 28, 1)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderTop: '2px solid rgba(70, 75, 114, 0.8)',
    borderBottom: '2px solid rgba(70, 75, 114, 0.8)',
    boxShadow: '0px 10px 15px 0px rgba(65, 6, 240, 0.5)'
    
}));

export const MyAccountHeaderAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: 'orange', 
    marginRight: '20px',
    [theme.breakpoints.up('mobileS')]: {
        width: '30px',
        height: '30px',
        fontSize: '16px',
    },
    [theme.breakpoints.up('tablet')]: {
        width: '35px',
        height: '35px',
        fontSize: '18px',
    },
    [theme.breakpoints.up('laptop')]: {
        width: '40px',
        height: '40px',
        fontSize: '20px',
    },
}));

export const MyAccountHeaderTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    [theme.breakpoints.up('mobileS')]: {
        fontSize: '1.1rem',
    },
    [theme.breakpoints.up('tablet')]: {
        
        fontSize: '1.4rem',
    },
    [theme.breakpoints.up('laptop')]: {
       
        fontSize: '1.6rem',
    },
}));

export const MyAccountHeaderRegisterNameContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    display: 'flex', 
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
        padding: '10px 0 10px 0',
    },
}));