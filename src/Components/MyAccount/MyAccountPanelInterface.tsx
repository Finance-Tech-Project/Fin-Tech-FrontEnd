import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MyAccountPanelInterfaceContainer, MyAccountPanelInterfaceToolbarArrow, MyAccountPanelInterfaceToolbarContainer, MyAccountPanelInterfaceToolbarText, MyAccountPanelInterfaceToolbarWrapper } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { Box } from '@mui/material';

const MyAccountPanelInterface = () => {
    return (
        <Grid container sx={{ width: '100%' }}>
            <Grid
                desktop={2}
            >
                <MyAccountPanelInterfaceContainer>
                    <MyAccountPanelInterfaceToolbarContainer>
                        <MyAccountPanelInterfaceToolbarWrapper>
                            <MyAccountPanelInterfaceToolbarText>Toolbar</MyAccountPanelInterfaceToolbarText>
                            <MyAccountPanelInterfaceToolbarArrow></MyAccountPanelInterfaceToolbarArrow>
                        </MyAccountPanelInterfaceToolbarWrapper>

                    </MyAccountPanelInterfaceToolbarContainer>
                </MyAccountPanelInterfaceContainer>
            </Grid>
        </Grid>
    )
}

export default MyAccountPanelInterface