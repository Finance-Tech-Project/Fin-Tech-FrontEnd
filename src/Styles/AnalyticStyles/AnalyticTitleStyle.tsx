import { Box, styled } from "@mui/material";

export const AnalyticTitleContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        // padding: '60px 60px'
    },
}));