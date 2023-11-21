import { Box, styled } from "@mui/material";
import MyAccount_BG from '../../Images/MyAccountImages/MyAccount_BG_3.jpg';

export const MyAccountContainer = styled(Box)(({ theme }) => ({
    background: `url(${MyAccount_BG}) center center/cover no-repeat`,
    width: '100%',
    minHeight: '835px'
}));

export const MyAccountBlackoutContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '835px',
    background: 'rgba(1, 1, 25, 0.5)'
}));