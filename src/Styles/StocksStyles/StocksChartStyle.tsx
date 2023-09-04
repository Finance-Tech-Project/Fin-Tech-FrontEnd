import { Autocomplete, Box, styled } from "@mui/material";

export const StocksAutocomplete = styled(Autocomplete)(({ theme }) => ({
    width: 300,
    '.MuiInputBase-input': {
        color: 'white',
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
        },
    },
    '& .MuiFormLabel-root': {
        color: 'white',
    },
    '& .MuiButtonBase-root': {
        color: 'white',
    }
}));

export const StocksChartContainer = styled(Box)(({ theme }) => ({
    width: '100%', 
    border: '2px solid rgba(70, 75, 114, 0.8)',
    borderTopLeftRadius: '120px',
    borderBottomRightRadius: '120px',
    padding: '60px',
    paddingTop: '50px',
    backgroundColor: 'rgba(4, 3, 28, 0.6)',
    boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
    marginTop: '50px'
}));

export const StocksChartSearchTickerContainer = styled(Box)(({ theme }) => ({
    paddingBottom: '50px', 
    display: 'flex', 
    justifyContent: 'space-between'
}));