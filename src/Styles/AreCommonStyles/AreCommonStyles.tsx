import { Autocomplete, Theme, Typography, styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const SelectStyle = (theme: Theme) => ({ 
    '.MuiInputBase-input': {
        color: 'white',
        borderColor: 'white',
    },
    '& .MuiFormLabel-root': {
        color: 'white',
    },
    '& .MuiSvgIcon-root': {
        color: 'white',
    },
    '.MuiPopover-paper': {
        backgroundColor: '#190033'
    },
    '&.MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
        }
    }
});

export const GeneralDatePicker = styled(DatePicker)(({ theme }) => ({
     width: '100%',
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
    },
    [theme.breakpoints.up('mobileS')]: {
       marginTop: '20px'
    },
    [theme.breakpoints.up('laptop')]: {
        marginTop: '0px'
    }
}));

export const GeneralDatePickerStyle = (theme: Theme) => ({
    '& .MuiDateCalendar-root': {
        width: '103%',
        color: 'white',
        backgroundColor: '#190033'
    },
    '& .MuiButtonBase-root': {
        color: 'white',
    },
    '& .MuiTypography-root': {
        color: 'white',
    }
});

export const GeneralAutocomplete = styled(Autocomplete)(({ theme }) => ({
    width: '100%',
    '.MuiInputBase-input': {
        color: 'white',
        borderColor: 'white'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(70, 75, 114, 0.8)'
        }
    },
    '& .MuiFormLabel-root': {
        color: 'white'
    },
    '& .MuiButtonBase-root': {
        color: 'white'
    }
}));

export const GeneralTitleHeader = styled(Typography)(({ theme }) => ({
	color: 'rgba(255, 196, 0, 1)',
	fontSize: '2.5rem',
	fontWeight: 600,
	textAlign: 'center',
	paddingTop: '20px',
	textShadow: '5px 5px 6px #ADC5BD',
	[theme.breakpoints.up('mobileS')]: {
		fontSize: '1.8rem',
		paddingTop: '20px',
	},
	[theme.breakpoints.up('mobileM')]: {
		fontSize: '2.3rem'
	},
	[theme.breakpoints.up('mobileL')]: {
		fontSize: '2.4rem'
	},
	[theme.breakpoints.up('tablet')]: {
		paddingTop: '40px',
	}
}));

export const GeneralStocksBlocksTitle = styled(Typography)(({ theme }) => ({
    color: 'yellow', 
    textAlign: 'start', 
    padding: '10px 0 10px 0',
    textShadow: '5px 5px 6px #ADC5BD',
    [theme.breakpoints.up('mobileS')]: {
        fontSize: '1.8rem',
	    fontWeight: 300,
    },
    [theme.breakpoints.up('tablet')]: {
        fontSize: '2rem',
	    fontWeight: 400,
    },
    [theme.breakpoints.up('desktop')]: {
        fontSize: '2.2rem',
        fontWeight: 500,
    },
    [theme.breakpoints.up('desktopL')]: {
        fontSize: '2.5rem',
        fontWeight: 600,
    },
}));

