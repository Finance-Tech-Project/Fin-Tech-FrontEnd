import { Avatar, Box, Button, Link, TextField, Theme, Typography, styled } from "@mui/material";
import LoginRegister_BG_5 from "../../Images/LoginRegisterImages/LoginRegister_BG_5.jpg";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const LoginRegisterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '86.3vh',
    minHeight: '800px',
    background: 'linear-gradient(180deg, rgba(17,3,54,1) 0%, rgba(46,16,105,1) 50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const LoginAndRegisterContainer = styled(Box)(({ theme }) => ({
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    [theme.breakpoints.down('laptop')]: {
        width: '100%',
    },
}));

export const LoginRegisterWrapper = styled(Box)(({ theme }) => ({
    width: '70%', 
    height: '70%', 
    
    display: 'flex'
}));

export const LoginRegisterWrapperShadow = styled(Box)(({ theme }) => ({
    width: '100%', 
    boxShadow: '16px 16px 38px 0px rgba(24,61,204,0.87)', 
    display: 'flex'
}));

export const LoginBG = styled(Box)(({ theme }) => ({
    width: '45%',
    height: '100%',
    background: `url(${LoginRegister_BG_5}) center center/cover no-repeat`,
    
}));

export const LoginBgBlackout = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: 'rgba(39, 36, 36, 0.25)',
}));

export const LoginRegisterAvatar = styled(Avatar)(({ theme }) => ({
    width: '70px', 
    height: '70px', 
    backgroundColor: 'rgba(195, 0, 93, 0.8)'
}));

export const LoginRegisterAvatarIcon = styled(LockOutlinedIcon)(({ theme }) => ({
    fontSize: '40px', 
    color: 'rgba(203, 199, 199, 0.8)'
}));

export const LoginRegisterTypography = styled(Typography)(({ theme }) => ({
    color: 'rgba(203, 199, 199, 0.8)',
    paddingTop: '10px',
    fontSize: '1.7rem'
}));

export const LoginRegisterButton = styled(Button)(({ theme }) => ({
    marginTop: '20px', 
    boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)'
}));

export const LoginRegisterTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'marginRight' && prop !== 'marginBottom' 
})<any>(({ theme, marginRight, marginBottom}) => ({
    boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)',
    '.MuiInputBase-input': {
        color: 'rgba(203, 199, 199, 0.8)',
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px',

        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        }
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(203, 199, 199, 0.8)',
    },
    ...(marginRight && {marginRight: '40px'}),
    ...(marginBottom && {marginBottom: '20px'}),
    [theme.breakpoints.down('laptop')]: {
        ...(marginRight && {marginRight: '10px'}),
    },
}));

export const LoginRegisterLink = styled(Link)(({ theme }) => ({
    fontSize: '1rem'
}));

export const LoginRegisterGridContainerStyle = (theme: Theme) => ({
    width: '70%'
});

export const LoginRegisterGridStyle = (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});