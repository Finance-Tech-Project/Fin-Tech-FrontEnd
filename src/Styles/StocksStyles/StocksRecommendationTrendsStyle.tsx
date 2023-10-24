import { Box, styled } from "@mui/material";

export const StocksRecommendationTrendsContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopRightRadius: '120px',
    borderBottomLeftRadius: '120px',
    padding: '50px 60px 60px 60px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.down('desktop')]: {
        marginTop: '0px',
        marginBottom: '50px',
    },
}));