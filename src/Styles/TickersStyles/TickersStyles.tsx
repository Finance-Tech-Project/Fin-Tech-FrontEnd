import { Button, TableCell, styled } from "@mui/material";

export const TabelCellTicker = styled(TableCell)(({ theme }) => ({
    height: '29.5px',
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: '#3e3e3e',
        fontFamily: 'Inter, sans-serif',
        '&:nth-of-type(1)': {
            position: 'relative',
            zIndex: 1,
            borderRight: '1px solid #190033',
            boxShadow: '5px 0px 20px 0px rgba(0,20,135,1)',
            '&:hover': {
                cursor: 'pointer',
                borderBottom: '2px solid #190033',
                marginBottom: '5px'
            }
        }
    },
    [theme.breakpoints.up('laptop')]: {
        height: '30px',
    },
    [theme.breakpoints.up('laptopL')]: {
        height: '29px',
    },
    [theme.breakpoints.up('desktop')]: {
        height: '30px',
    }
}));

export const ChartButtons = styled(Button)(({ theme }) => ({
    width: '100%',
    color: 'white',
    backgroundColor: 'rgba(2, 1, 31, 0.5)',
    '&:hover, &:focus, &:active': {
        backgroundColor: 'rgba(110, 110, 114, 0.8)',
    },
    [theme.breakpoints.up('mobileM')]: {
        width: '100%',
    },
}));

