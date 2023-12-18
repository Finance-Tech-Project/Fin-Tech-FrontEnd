import { Box, styled } from "@mui/material";
import MyAccount_BG from '../../Images/MyAccountImages/MyAccount_BG_4.jpg';

export const MyAccountContainer = styled(Box)(({ theme }) => ({
    background: `url(${MyAccount_BG}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '700px',
    // [theme.breakpoints.up('desktop')]: {
    //     minHeight: '720px',
    // },
}));

export const MyAccountBlackoutContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '700px',
    background: 'rgba(1, 1, 25, 0.5)',
    // [theme.breakpoints.up('desktop')]: {
    //     minHeight: '720px',
    // },
}));

export const MyAccountFooterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '96px',
    backgroundColor: 'rgba(4, 3, 28, 1)',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderTop: '2px solid rgba(70, 75, 114, 0.8)',
    borderBottom: '2px solid rgba(70, 75, 114, 0.8)',
    boxShadow: '0px -10px 15px 0px rgba(65, 6, 240, 0.5)'
}));