import React from 'react';
import { MyAccountHeaderContainer } from '../../Styles/MyAccountStyles/MyAccountHeaderStyle';
import Logo from '../Home/Header/Logo';
import { Avatar, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';
import { HeaderButtonsStyle } from '../../Styles/HeaderStyles/HeaderStyles';

const MyAccountHeader = () => {
    return (
        <MyAccountHeaderContainer>
            <Grid container sx={{width: '100%'}}>
                <Grid sx={{display: 'flex', alignItems: 'center' }}
                    laptop={2} laptopOffset={0.5}
                    laptopL={2} laptopLOffset={0.5}
                    desktop={2} desktopOffset={0.5} 
                >
                   <Link to={`/home`}>
						<HeaderButtonsStyle disableRipple>
							<Logo />
						</HeaderButtonsStyle>
					</Link>
                </Grid>

                <Grid 
                    laptop={3.5} laptopOffset={6}
                    laptopL={2.5} laptopLOffset={7}
                    desktop={2} desktopOffset={7.5}
                    
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'orange', marginRight: '20px' }}>NO</Avatar>
                        <Typography variant="h5" sx={{ color: 'white' }}>Registered Name</Typography>
                    </Box>
                </Grid>
            </Grid>
        </MyAccountHeaderContainer>
    )
}

export default MyAccountHeader