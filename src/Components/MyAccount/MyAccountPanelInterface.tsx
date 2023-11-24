import React, { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MyAccountPanelInterfaceAccountIcon, MyAccountPanelInterfaceContainer, MyAccountPanelInterfacePortfolioIcon, MyAccountPanelInterfaceToolbarArrow, MyAccountPanelInterfaceToolbarButtonLogout, MyAccountPanelInterfaceToolbarButtonLogoutContainer, MyAccountPanelInterfaceToolbarButtons, MyAccountPanelInterfaceToolbarButtonsContainer, MyAccountPanelInterfaceToolbarButtonsItem, MyAccountPanelInterfaceToolbarContainer, MyAccountPanelInterfaceToolbarText, MyAccountPanelInterfaceToolbarTypography, MyAccountPanelInterfaceToolbarWrapper, MyAccountPanelInterfaceWatchlistIcon } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { Box, Button } from '@mui/material';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';

const MyAccountPanelInterface = () => {
    const [mouseFocusEnter, setMouseFocusEnter] = useState(false);
    const [mouseFocusOut, setMouseFocusOut] = useState(false);

    const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (event.target) {
            setMouseFocusEnter(true);
            setMouseFocusOut(false); 
        }
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (event.target) {
            setMouseFocusOut(true);
            setMouseFocusEnter(false);
        }
    };

    console.log(mouseFocusEnter)
    console.log(mouseFocusOut)
    return (
        <Grid container sx={{ width: '100%' }}>
            <Grid
                desktop={1.5}
            >
                <MyAccountPanelInterfaceContainer>
                    <MyAccountPanelInterfaceToolbarContainer>
                        <MyAccountPanelInterfaceToolbarWrapper>
                            <MyAccountPanelInterfaceToolbarText>Toolbar</MyAccountPanelInterfaceToolbarText>
                            <MyAccountPanelInterfaceToolbarArrow></MyAccountPanelInterfaceToolbarArrow>
                        </MyAccountPanelInterfaceToolbarWrapper>
                    </MyAccountPanelInterfaceToolbarContainer>

                    <MyAccountPanelInterfaceToolbarButtonsContainer>
                        <Box>
                            <MyAccountPanelInterfaceToolbarButtonsItem>
                                <MyAccountPanelInterfaceToolbarButtons disableRipple onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                                    <MyAccountPanelInterfaceAccountIcon colorOnFocus={mouseFocusEnter}/>
                                    <MyAccountPanelInterfaceToolbarTypography colorOnFocus={mouseFocusEnter}>Account</MyAccountPanelInterfaceToolbarTypography>
                                </MyAccountPanelInterfaceToolbarButtons>
                            </MyAccountPanelInterfaceToolbarButtonsItem>

                            <MyAccountPanelInterfaceToolbarButtonsItem>
                                <MyAccountPanelInterfaceToolbarButtons disableRipple onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                                    <MyAccountPanelInterfaceWatchlistIcon colorOnFocus={mouseFocusEnter}/>
                                    <MyAccountPanelInterfaceToolbarTypography colorOnFocus={mouseFocusEnter}>Watchlist</MyAccountPanelInterfaceToolbarTypography>
                                </MyAccountPanelInterfaceToolbarButtons>
                            </MyAccountPanelInterfaceToolbarButtonsItem>

                            <MyAccountPanelInterfaceToolbarButtonsItem>
                                <MyAccountPanelInterfaceToolbarButtons disableRipple onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
                                    <MyAccountPanelInterfacePortfolioIcon colorOnFocus={mouseFocusEnter}/>
                                    <MyAccountPanelInterfaceToolbarTypography colorOnFocus={mouseFocusEnter}>Portfolio</MyAccountPanelInterfaceToolbarTypography>
                                </MyAccountPanelInterfaceToolbarButtons>
                            </MyAccountPanelInterfaceToolbarButtonsItem>
                        </Box>


                        <MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                            <MyAccountPanelInterfaceToolbarButtonLogout disableRipple>Logout</MyAccountPanelInterfaceToolbarButtonLogout>
                        </MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                    </MyAccountPanelInterfaceToolbarButtonsContainer>
                </MyAccountPanelInterfaceContainer>
            </Grid>
        </Grid>
    )
}

export default MyAccountPanelInterface