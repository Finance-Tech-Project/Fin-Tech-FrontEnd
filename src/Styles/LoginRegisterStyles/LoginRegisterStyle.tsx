import { Box, styled } from "@mui/material";
import LoginRegister_BG_1 from "../../Images/LoginRegisterImages/LoginRegister_BG_1.jpg";
import LoginRegister_BG_2 from "../../Images/LoginRegisterImages/LoginRegister_BG_2.jpg";
import LoginRegister_BG_3 from "../../Images/LoginRegisterImages/LoginRegister_BG_3.jpg";
import LoginRegister_BG_4 from "../../Images/LoginRegisterImages/LoginRegister_BG_4.jpg";
import LoginRegister_BG_5 from "../../Images/LoginRegisterImages/LoginRegister_BG_5.jpg";
import LoginRegister_BG_6 from "../../Images/LoginRegisterImages/LoginRegister_BG_6.jpg";
import LoginRegister_BG_7 from "../../Images/LoginRegisterImages/LoginRegister_BG_7.jpg";
import LoginRegister_BG_8 from "../../Images/LoginRegisterImages/LoginRegister_BG_8.jpg";

export const LoginRegisterContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '92.5vh',
    background: 'linear-gradient(180deg, rgba(17,3,54,1) 0%, rgba(46,16,105,1) 50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const LoginContainer = styled(Box)(({ theme }) => ({

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