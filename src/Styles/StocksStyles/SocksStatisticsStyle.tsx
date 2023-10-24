import { Box, TableCell, TableContainer, styled } from "@mui/material";

export const StocksStatisticsContainer = styled(Box)(({ theme }) => ({
    paddingTop: '80px',
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px',
    [theme.breakpoints.up('mobileS')]: {
        padding: '40px 25px 60px 25px',
    },
    [theme.breakpoints.up('tablet')]: {
        padding: '40px 60px 60px 60px',
    },
}));

export const StocksStatisticsTitleContainer= styled(Box)(({ theme }) => ({
    width: '98.5%'
}));

export const StocksStatisticsTitleWrapper = styled(Box)(({ theme }) => ({
    padding: '20px 0 10px 0',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptop')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center'
    }
}));

export const StocksStatisticsTableContainer = styled(Box)(({ theme }) => ({
    width: '98.5%',
    [theme.breakpoints.up('mobileS')]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [theme.breakpoints.up('laptopL')]: {
        display: 'flex',
        flexDirection: 'row'
    }
}));

export const StocksStatisticsTableWrapper = styled(Box)(({ theme }) => ({
    width: '100%'
}));

export const StatisticsTableContainer = styled(TableContainer, {
    shouldForwardProp: (prop) => prop !== 'marginTop'
})<any>(({ theme, marginTop }) => ({
    width: '100%', 
    backgroundColor: '#2c0951', 
    [theme.breakpoints.up('laptopL')]: {
        ...(marginTop && {marginTop: '50px'})
    }
}));

export const TableCellWithHighlights = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: 'rgba(0,20,135,1)',
        fontFamily: 'Inter, sans-serif',
        '&:hover': {
            borderBottom: '2px solid #190033',
            marginBottom: '5px'
        }
    },
}));

export const TableCellWithoutHighlights = styled(TableCell)(({ theme }) => ({
    '&.MuiTableCell-root': {
        color: 'white',
        backgroundColor: '#3e3e3e',
        fontFamily: 'Inter, sans-serif',
        '&:hover': {
            borderBottom: '2px solid #190033',
            marginBottom: '5px'
        }
    },
}));