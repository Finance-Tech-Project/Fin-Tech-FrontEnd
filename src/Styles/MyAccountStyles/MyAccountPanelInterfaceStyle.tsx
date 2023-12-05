import { Box, Button, Typography, styled } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export const MyAccountPanelInterfaceContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '1200px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    boxShadow: '10px 5px 10px 0px rgba(65, 6, 240, 0.5)'
}));

export const MyAccountPanelInterfaceToolbarContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100px',
    borderBottom: '2px solid rgba(70, 75, 114, 0.8)',
    boxShadow: '5px 5px 15px 5px rgba(65, 6, 240, 0.5)'
}));

export const MyAccountPanelInterfaceToolbarWrapper = styled(Box)(({ theme }) => ({
    width: '92%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px 0 20px'
}));

export const MyAccountPanelInterfaceToolbarText = styled(Typography)(({ theme }) => ({
    color: 'rgba(255, 196, 0, 1)',
    fontSize: '1.7rem',
    fontWeight: '600',
    textShadow: '5px 5px 6px #ADC5BD'
}));

export const MyAccountPanelInterfaceToolbarArrow = styled(ArrowCircleLeftOutlinedIcon)(({ theme }) => ({
    color: 'orange',
    fontSize: '3rem',
    cursor: 'pointer',
    '&:hover': {
        color: 'rgba(219, 0, 219, 1)',
    }
}));

export const MyAccountPanelInterfaceToolbarButtons = styled(Button)(({ theme }) => ({
    width: '230px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.65rem',
    color: 'rgba(255, 146, 255, 1)',
    '&:hover, &:focus, &:active': {
        color: 'rgba(219, 0, 219, 1)',
        backgroundColor: 'rgba(4, 3, 28, 0.1)',
        '& .MuiSvgIcon-root': {
            color: 'rgba(219, 0, 219, 1)',
        }
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2.2rem !important',
    }
}));

export const MyAccountPanelInterfaceToolbarButtonLogout = styled(Button)(({ theme }) => ({
    width: '250px',
    color: 'rgba(255, 146, 255, 1)',
    fontSize: '1.7rem',
    fontWeight: '400',
    '&:hover, &:focus': {
        backgroundColor: 'rgba(4, 3, 28, 0.1)',
        color: 'rgba(219, 0, 219, 1)'
    }
}));

export const MyAccountPanelInterfaceToolbarButtonsContainer = styled(Box)(({ theme }) => ({
    minHeight: '1100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}));

export const MyAccountPanelInterfaceToolbarButtonsItem = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const MyAccountPanelInterfaceToolbarButtonLogoutContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100px',
    borderTop: '2px solid rgba(70, 75, 114, 0.8)',
    boxShadow: '0px -5px 15px 5px rgba(65, 6, 240, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));