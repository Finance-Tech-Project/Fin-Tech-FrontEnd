import { Box, styled } from "@mui/material";

export const RegisterContainerTextField = styled(Box)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    paddingTop: '20px', 
    width: '100%',
    [theme.breakpoints.down('tablet')]: {
        flexDirection: 'column'
    },
}));