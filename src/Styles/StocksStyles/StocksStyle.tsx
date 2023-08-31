import { Box, Typography, styled } from "@mui/material";
import Main_BG_4 from "../../Images/MainBG_4.jpg";
import Main_BG_6 from "../../Images/MainBG_6.jpg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const StocksContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '835px',
    background: `url(${Main_BG_4}) center center/cover no-repeat`,
}));

export const StocksBlackoutContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: '835px',
    background: 'rgba(39, 36, 36, 0.25)'
}));

export const StocksTitleContainer = styled(Box)(({ theme }) => ({
    width: '80%',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    marginTop: '30px',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)'
}));

export const StockTitleHeader = styled(Typography)(({ theme }) => ({
    color: 'rgba(255, 196, 0, 1)',
    fontSize: '2.5rem',
    fontWeight: 600,
    textAlign: 'center',
}));

export const StockTitleDescrRound = styled(FiberManualRecordIcon)(({ theme }) => ({
    paddingTop: '10px',
    paddingRight: '10px',
    color: 'red'
}));

export const StockTitleDescr = styled(Typography)(({ theme }) => ({
    color: 'rgba(199, 180, 255, 1)',
    fontSize: '1.8rem',
    fontWeight: 400,
    // lineHeight: '30px'
}));