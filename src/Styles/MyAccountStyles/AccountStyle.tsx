import { Box, Button, Theme, Typography, styled } from "@mui/material";

export const AccountContainer = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.up('laptopL')]: {
        minHeight: '700px',
    },
    [theme.breakpoints.up('desktop')]: {
        minHeight: '725px',
    },
    [theme.breakpoints.up('desktopL')]: {
        minHeight: '812px',
    }
}));

export const AccountWrapper = styled(Box)(({ theme }) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    margin: '50px 0px 50px 0',
    minHeight: '516px',
    [theme.breakpoints.up('mobileS')]: {
        borderTopLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        padding: '25px 25px',
    },
    [theme.breakpoints.up('tablet')]: {
        borderTopLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        padding: '50px 50px',
    }
}));

export const AccountMainGridContainerStyle = (theme: Theme) => ({
    width: '100%',
    minHeight: '445px',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptopL')]: {
        flexDirection: 'row'
    }
});

export const AccountTextFieldsGridStyle = (theme: Theme) => ({
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});

export const AccountDividerGridStyle = (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
});

export const AccountItemContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '20px',
    [theme.breakpoints.up('mobileS')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.up('tablet')]: {
        flexDirection: 'row'
    },
}));

export const AccountItemTypographyEmailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('tablet')]: {
        flexDirection: 'column'
    }
}));

export const AccountTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontSize: '1.8rem',
    [theme.breakpoints.down('tablet')]: {
        textAlign: 'center',
    },
}));

export const AccountButtonUpdate = styled(Button)(({ theme }) => ({
    width: '100%',
    height: '56px',
    border: '1.5px solid rgba(37, 59, 227, 0.8)',
    backgroundColor: 'rgba(1, 17, 36, 0.8)',
    color: 'white',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    marginTop: '20px'
}));

