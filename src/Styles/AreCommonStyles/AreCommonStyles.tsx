import { Select, Theme, styled } from "@mui/material";

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