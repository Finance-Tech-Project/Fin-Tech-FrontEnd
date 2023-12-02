import { Autocomplete, Theme, Typography, styled } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { ComponentName } from "../../Enums/Enums";

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

export const GeneralDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
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

export const GeneralDatePickerLayoutStyle = (theme: Theme) => ({
    '& .MuiDateCalendar-root': {
        width: '100%',
        color: 'white',
        backgroundColor: '#190033',
        [theme.breakpoints.down('mobileM')]: {
            height: '266px'
        }
    },
    '& .MuiButtonBase-root': {
        color: 'white'
    },
    '& .MuiTypography-root': {
        color: 'white'
    },
    '&.MuiPickersLayout-root': {
        display: 'block',
        width: '100%'
    }
});

export const GeneralDatePickerPopperStyle = (theme: Theme, componentName: string, isMobile: boolean) => ({
    border: '2px solid rgba(70, 75, 114, 0.8)',
    [theme.breakpoints.down('mobileM')]: {
        height: '266px'
    },
    [theme.breakpoints.up('mobileS')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '227px' : '242px') : (!isMobile ? '230px' : '245px')
    },
    [theme.breakpoints.up('mobileM')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '277px' : '292.5px') : (!isMobile ? '281px' : '296px')
    },
    [theme.breakpoints.up('mobileL')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '323px' : '338px') : (!isMobile ? '326px' : '341px')
    },
    [theme.breakpoints.up('tablet')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '554px' : '568.5px') : (!isMobile ? '560px' : '575px')
    },
    [theme.breakpoints.up('laptop')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '368px' : '375px') : (!isMobile ? '546px' : '555px')
    },
    [theme.breakpoints.up('laptopL')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '547px' : '553px') : (!isMobile ? '359px' : '364px')
    },
    [theme.breakpoints.up('desktop')]: {
        width: componentName === ComponentName.Stocks ? (!isMobile ? '456px': '461px') : (!isMobile ? '481px' : '485px')
    },
    [theme.breakpoints.up('desktopL')]: {
        width: componentName === ComponentName.Stocks ? '298px' : '645px'
    },
    '& .MuiPickersDay-root': {
        [theme.breakpoints.down('mobileM')]: {
            fontSize: '14px',
            width: '26px',
            height: '26px'
        }
    },
    '& .MuiPickersCalendarHeader-label': {
        [theme.breakpoints.down('mobileM')]: {
            width: '130px',
            fontSize: '15px',
        }
    },
    '& .MuiPickersCalendarHeader-root': {
        [theme.breakpoints.down('mobileM')]: {
            paddingLeft: '14px',
        }
    },
    '& .MuiDayCalendar-header': {
        [theme.breakpoints.down('mobileM')]: {
            padding: '0 5px',
        }
    },
    '& .MuiIconButton-root': {
        [theme.breakpoints.down('mobileM')]: {
            width: '25px',
            height: '25px'
        }
    },
    '& .MuiPickersArrowSwitcher-spacer': {
        [theme.breakpoints.down('mobileM')]: {
            width: '14px'
        }
    }
});

export const GeneralDatePickerDesktopPaperStyle = (theme: Theme) => ({
    width: '100%',
    [theme.breakpoints.down('mobileM')]: {
        height: '266px',
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

