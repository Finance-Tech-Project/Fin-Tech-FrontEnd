import { Avatar, Box, Button, Link, TextField, Theme, Typography, styled } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginRegister_BG from '../../Images/MyAccountImages/MyAccount_BG_6.jpg';

export const LoginRegisterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '86.5vh',
    minHeight: '835px',
    background: `url(${LoginRegister_BG}) center center/cover no-repeat `,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'center',
    [theme.breakpoints.down('laptop')]: {
        width: '100%'
    }
}));

export const LoginRegisterWrapperShadow = styled(Box)(({ theme }) => ({
    width: '100%', 
    minHeight: '750px',
    display: 'flex'
}));

export const LoginRegisterAvatar = styled(Avatar)(({ theme }) => ({
    width: '70px', 
    height: '70px', 
    backgroundColor: 'rgba(195, 0, 93, 0.8)'
}));

export const LoginRegisterAvatarIcon = styled(LockOutlinedIcon)(({ theme }) => ({
    fontSize: '40px', 
    color: 'whitesmoke'
}));

export const LoginRegisterTypography = styled(Typography)(({ theme }) => ({
    color: 'whitesmoke',
    paddingTop: '10px',
    fontSize: '1.7rem',
    textShadow: '4px 4px 3px rgba(0, 20, 255, 0.8)',
}));

export const LoginRegisterButton = styled(Button)(({ theme }) => ({
    marginTop: '40px', 
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
}));

export const LoginRegisterTextField = styled(TextField, {
    shouldForwardProp: (prop) => 
        prop !== 'marginRight' && 
        prop !== 'marginBottom' && 
        prop !== 'marginTop' && 
        prop !== 'validationColor' &&
        prop !== 'widthForModalPortfolioCreate' &&
        prop !== 'widthForTableModalPortfolioCreate'
})<any>(({ 
    theme, 
    marginRight, 
    marginBottom, 
    marginTop, 
    validationColor, 
    widthForModalPortfolioCreate, 
    widthForTableModalPortfolioCreate
}) => ({
    boxShadow: !validationColor ? '5px 5px 25px 0px rgba(65, 6, 240, 0.8)' : '5px 5px 25px 0px rgba(253, 0, 0, 0.8)',
    '& .MuiInputBase-input': {
        color: 'white',
        zIndex: 1,
        ...(widthForModalPortfolioCreate && {width: '250px'}),
        ...(widthForTableModalPortfolioCreate && {width: '93px'})
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: !validationColor ? 'rgba(37, 59, 227, 0.8)' : 'rgba(253, 0, 0, 0.8)',
            borderWidth: '1.5px',
            backgroundColor: 'rgba(1, 17, 36, 0.8)',
            color: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
            color: 'white',
        }
    },
    '& .MuiInputLabel-root': {
        color: 'white',
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
    fontSize: '1rem',
    color: 'whitesmoke',
    textDecorationColor: 'whitesmoke'
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