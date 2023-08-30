import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderButtonsStyle } from '../../Styles/HeaderStyles/HeaderStyles'
import Logo from '../Home/Header/Logo'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { theme } from '../../Constants/MaterialConstants/theme'
const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%', backgroundColor: 'rgba(4, 3, 28, 1)', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                <Grid container width="100%" sx={{
                    [theme.breakpoints.up('mobileS')]: {
                        display: 'flex',
                        justifyContent: 'center'
                    },
                }}>

                    <Grid 
                         tabletOffset={8}
                         laptopOffset={9}
                         laptopLOffset={8.5}
                         desktopOffset={9.5}
                         desktopLOffset={10}
                    >
                        <Link to={`/home`}>
                            <HeaderButtonsStyle disableRipple>
                                <Logo />
                            </HeaderButtonsStyle>
                        </Link>
                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider>

    )
}

export default Footer