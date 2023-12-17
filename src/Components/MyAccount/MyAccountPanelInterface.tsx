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
import { useAppDispatch } from '../../app/hooks';
import { userLogout } from '../../Reducers/userReducer';
import { deleteToken } from '../../Reducers/tokenReducer';
import { Link, Outlet } from 'react-router-dom';

const MyAccountPanelInterface = () => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
        dispatch(deleteToken());
        sessionStorage.clear();
        localStorage.removeItem('userData');
    };

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
                        <Box sx={{height: '100%'}}>
                            {myAccountPanelInterfaceButtons.map((button, index) => {
                                return (
                                    <Link style={{textDecoration: "none"}} to={`${button.route}`} key={index} >
                                        <MyAccountPanelInterfaceItem context={button.title} icon={button.icon} />
                                    </Link>
                                );
                            })}
                        </Box>

                        <MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                            <Link to="/home">
                                <MyAccountPanelInterfaceToolbarButtonLogout
                                    onClick={handleLogout}
                                    disableRipple>
                                    Logout
                                </MyAccountPanelInterfaceToolbarButtonLogout>
                            </Link>
                        </MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                    </MyAccountPanelInterfaceToolbarButtonsContainer>
                </MyAccountPanelInterfaceContainer>
            </Grid>

            <Grid desktop={10}>
                <Outlet></Outlet>
            </Grid>
        </Grid>
    )
}

export default MyAccountPanelInterface