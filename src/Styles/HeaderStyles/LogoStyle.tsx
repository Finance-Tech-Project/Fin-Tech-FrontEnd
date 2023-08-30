import { styled } from "@mui/material";
import {ReactComponent as LogoHeader} from '../../Images/Logo/Group 1.svg'

export const MainLogo = styled(LogoHeader)(({ theme }) => ({
    [theme.breakpoints.up('mobileS')]: {
       width: '170px'
    },
    [theme.breakpoints.up('laptopL')]: {
        width: '216px'
    }
}));