import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { 
    MyAccountPanelInterfaceContainer, 
    MyAccountPanelInterfaceToolbarArrow, 
    MyAccountPanelInterfaceToolbarButtonLogout, 
    MyAccountPanelInterfaceToolbarButtonLogoutContainer, 
    MyAccountPanelInterfaceToolbarButtonsContainer, 
    MyAccountPanelInterfaceToolbarContainer, 
    MyAccountPanelInterfaceToolbarText, 
    MyAccountPanelInterfaceToolbarWrapper 
} from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { Box } from '@mui/material';
import MyAccountPanelInterfaceItem from './MyAccounPaneltInterfaceItem';
import { myAccountPanelInterfaceButtons } from '../../Constants/ProjectConstants/myAccountPanelInterfaceConstants';

const MyAccountPanelInterface = () => {
   
    return (
        <Grid container sx={{ width: '100%' }}>
            <Grid
                desktop={2}
                desktopL={1.5}
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
                            {myAccountPanelInterfaceButtons.map((button, index) => {
                                return (
                                    <MyAccountPanelInterfaceItem context={button.title} icon={button.icon} key={index}/>
                                );
                            })}
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