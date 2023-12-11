import { Box, Checkbox, FormControlLabel, Theme, Typography, styled } from "@mui/material";

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

export const LoginExceptionModalContainer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: '#2c0951',
    border: '2px solid rgba(37, 59, 227, 0.8)',
    boxShadow: '5px 5px 25px 0px rgba(65, 6, 240, 0.8)',
    padding: '20px'
}));

export const LoginExceptionModalTypography = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    color: 'whitesmoke'
}));