import { Checkbox, FormControlLabel, Theme, styled } from "@mui/material";

export const LoginFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    color: 'rgba(203, 199, 199, 0.8)',
    paddingTop: '10px'
}));

export const LoginCheckbox = styled(Checkbox)(({ theme }) => ({
    color: 'rgba(203, 199, 199, 0.8)'
}));

export const LoginGridLinksContainerStyle = (theme: Theme) => ({
    width: '100%',
    paddingTop: '25px',
    display: 'flex',
    justifyContent: 'space-between'
});

