import { Box, Typography, styled } from "@mui/material";
import Main_BG_4 from "../../Images/MainBG_4.jpg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const StocksContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	minHeight: '835px',
	background: `url(${Main_BG_4}) center center/cover no-repeat`,
}));

export const StocksBlackoutContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	minHeight: '835px',
	background: 'rgba(1, 1, 25, 0.5)'
}));

export const StocksTitleContainer = styled(Box)(({ theme }) => ({
	border: '2px solid rgba(70, 75, 114, 0.8)',
	borderTopLeftRadius: '120px',
	borderBottomRightRadius: '120px',
	marginTop: '30px',
	backgroundColor: 'rgba(4, 3, 28, 0.6)',
	boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)'
}));

export const StockTitleHeader = styled(Typography)(({ theme }) => ({
	color: 'rgba(255, 196, 0, 1)',
	fontSize: '2.5rem',
	fontWeight: 600,
	textAlign: 'center',
	paddingTop: '20px',
	textShadow: '5px 5px 6px #ADC5BD',
	[theme.breakpoints.up('mobileS')]: {
        fontSize: '2rem',
		paddingTop: '40px',
    },
	[theme.breakpoints.up('mobileM')]: {
        fontSize: '2.3rem'
    },
	[theme.breakpoints.up('mobileL')]: {
        fontSize: '2.4rem'
    }
}));

export const StockTitleDescrRound = styled(FiberManualRecordIcon)(({ theme }) => ({
	paddingTop: '10px',
	paddingRight: '10px',
	color: 'red'
}));

export const StockTitleDescr = styled(Typography)(({ theme }) => ({
	color: 'rgba(199, 180, 255, 1)',
	fontSize: '1.6rem',
	fontWeight: 400,
}));

