import { Box, styled } from '@mui/material';
import MainBG_1 from '../../Images/MainBG_1.jpg' ;
import MainBG_2 from '../../Images/MainBG_2.jpg' ;
import MainBG_3 from '../../Images/MainBG_3.jpg' ;
import MainBG_4 from '../../Images/MainBG_4.jpg' ;
import MainBG_5 from '../../Images/MainBG_5.jpg' ;
import MainBG_6 from '../../Images/MainBG_6.jpg' ;

export const MainContainer = styled(Box)(({ theme }) => ({
    background: `url(${MainBG_2}) center center/cover no-repeat`,
    width: '100%',
    height: '835px'
}));

export const MainBackgroundColor = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '835px',
    background: 'rgba(39, 36, 36, 0.25)'
}));

