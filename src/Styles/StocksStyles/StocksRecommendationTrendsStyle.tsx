import { Box, styled } from "@mui/material";

export const StocksRecommendationTrendsContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    [theme.breakpoints.up('mobileS')]: {
        padding: '10px 15px 20px 15px',
        marginBottom: '50px'
    },
    [theme.breakpoints.up('mobileM')]: {
        padding: '10px 20px 20px 20px'
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '40px 60px 60px 60px',
    },
    [theme.breakpoints.up('desktop')]: {
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        borderTopRightRadius: '120px',
        borderBottomLeftRadius: '120px',
        marginTop: '50px',
    },
}));

