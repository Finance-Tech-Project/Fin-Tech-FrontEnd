import { Avatar, Box, Button, Link, TextField, Theme, Typography, styled } from "@mui/material";
import LoginRegister_BG_5 from "../../Images/LoginRegisterImages/LoginRegister_BG_5.jpg";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginRegister_BG from '../../Images/MyAccountImages/MyAccount_BG_6.jpg';

export const LoginRegisterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '86.5vh',
    minHeight: '835px',
    background: `url(${LoginRegister_BG}) center center/cover no-repeat `,
    // background: 'linear-gradient(180deg, rgba(17,3,54,1) 0%, rgba(46,16,105,1) 50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.up('desktop')]: {
    //     minHeight: '750px',
    //     height: '81.1vh',
    // },
    // [theme.breakpoints.up('desktopL')]: {
    //     minHeight: '850px',
    //     height: '86.3vh',
    // },
}));

export const LoginRegisterBlackoutContainer = styled(Box)(({ theme }) => ({
    height: '86.5vh',
    minHeight: '835px',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.05)'
}));

export const LoginAndRegisterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
    [theme.breakpoints.down('laptop')]: {
        width: '100%'
    },
    [theme.breakpoints.down('tablet')]: {
        paddingTop: '50px'
    },
}));

export const LoginRegisterWrapperShadow = styled(Box)(({ theme }) => ({
    width: '100%', 
    minHeight: '750px',
    // background: 'linear-gradient(180deg, rgba(17,3,54,0.5) 0%, rgba(46,16,105,0.5) 50%)',
    // boxShadow: '16px 16px 38px 0px rgba(24,61,204,0.87)', 
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
    marginTop: '40px', 
    boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)'
}));

export const LoginRegisterTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'marginRight' && prop !== 'marginBottom' && prop !== 'marginTop'
})<any>(({ theme, marginRight, marginBottom, marginTop}) => ({
    boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)',
    '.MuiInputBase-input': {
        color: 'rgba(203, 199, 199, 0.8)',
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px',
            backgroundColor: 'rgba(1, 17, 36, 0.8)'
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
    ...(marginTop && {marginTop: '20px'}),
    [theme.breakpoints.down('laptop')]: {
        ...(marginRight && {marginRight: '10px'}),
    },
    [theme.breakpoints.down('tablet')]: {
        ...(marginTop && {marginTop: '0px'}),
    }
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