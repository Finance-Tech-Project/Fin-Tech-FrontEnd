import { Box, Card, Theme, Typography, styled } from "@mui/material";
import AnalyticsIcon from '@mui/icons-material/Analytics';

export const AnalyticTitleContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        marginBottom: '40px'
    }
}));

export const AnalyticTitleCardContainer = styled(Card)(({ theme }) => ({
    // '& .MuiCardContent-root': {
    //     padding: '0px 30px',
    //     '&:last-child': {
    //         paddingBottom: '0px'
    //     },
    // },
    minHeight: '160px',
    backgroundColor: ' rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid rgba(70, 75, 114, 0.8)',
    '&:hover': {
        backgroundColor: ' rgba(4, 3, 28, 0.2)',
        boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.2)',
    },
    [theme.breakpoints.up('mobileS')]: {
        marginBottom: '30px',
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        boxShadow: '8px 8px 25px 0px rgba(65, 6, 240, 0.7)',
        '& .MuiCardContent-root': {
            padding: '10px 15px'
        },
    },
    [theme.breakpoints.up('mobileM')]: {
        '& .MuiCardContent-root': {
            padding: '0px 15px',
            '&:last-child': {
                paddingBottom: '0px'
            },
        },
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '90px',
        borderBottomRightRadius: '90px',
        boxShadow: '8px 8px 25px 0px rgba(65, 6, 240, 0.7)',
        '& .MuiCardContent-root': {
            padding: '0px 30px',
            '&:last-child': {
                paddingBottom: '0px'
            }
        }
    },
    [theme.breakpoints.up('laptop')]: {
        marginBottom: '40px',
        boxShadow: '10px 10px 35px 0px rgba(65, 6, 240, 0.8)',
        minHeight: '200px',
        '& .MuiCardContent-root': {
            padding: '0px 40px',
            '&:last-child': {
                paddingBottom: '0px'
            }
        }
    },
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '170px',
        borderTopLeftRadius: '60px',
        borderBottomRightRadius: '60px',
        '& .MuiCardContent-root': {
            padding: '0px 30px',
            '&:last-child': {
                paddingBottom: '0px'
            }
        }
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '170px',
        boxShadow: '10px 10px 45px 0px rgba(65, 6, 240, 0.8)',
    },
    [theme.breakpoints.up('desktopL')]: {
        minHeight: '180px',
    }
}));

export const AnalyticTitleCardTypography = styled(Typography)(({ theme }) => ({
    color: 'rgba(255, 146, 255, 1)',
    lineHeight: '31px',
    [theme.breakpoints.up('mobileS')]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '1.4rem',
        fontWeight: '500'
    }
}));

export const AnalyticTitleCardIcon = styled(AnalyticsIcon)(({ theme }) => ({
    color: 'rgba(206, 0, 255, 1)',
    float: 'left',
    fontSize: '30px',
    paddingRight: '5px'
}));

export const AnalyticTitleCardGridContainerStyle = (theme: Theme) => ({
    width: '100%',
    [theme.breakpoints.up('mobileS')]: {
        padding: '30px 0 0 0'
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '40px 0 15px 0'
    },
    [theme.breakpoints.up('laptop')]: {
        padding: '40px 0 10px 0'
    },
    [theme.breakpoints.up('desktop')]: {
        padding: '40px 0 30px 0'
    },
});