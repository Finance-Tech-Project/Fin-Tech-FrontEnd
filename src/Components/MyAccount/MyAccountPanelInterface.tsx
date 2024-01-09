/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {
    MyAccountPanelInterfaceContainer,
    MyAccountPanelInterfaceToolbarArrowLeft,
    MyAccountPanelInterfaceToolbarButtonLogout,
    MyAccountPanelInterfaceToolbarButtonLogoutContainer,
    MyAccountPanelInterfaceToolbarButtonsContainer,
    MyAccountPanelInterfaceToolbarContainer,
    MyAccountPanelInterfaceToolbarText,
    MyAccountPanelInterfaceToolbarWrapper
} from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { Box, Drawer } from '@mui/material';
import MyAccountPanelInterfaceItem from './MyAccounPaneltInterfaceItem';
import { myAccountPanelInterfaceButtons } from '../../Constants/ProjectConstants/myAccountPanelInterfaceConstants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userLogout } from '../../Reducers/userReducer';
import { deleteToken } from '../../Reducers/tokenReducer';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { theme } from '../../Constants/MaterialConstants/theme';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';

const MyAccountPanelInterface = () => {
    const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const handleDrawerClose = () => {
        dispatch(setOpenColseToolbar(false));
    };

    const handleLogout = () => {
        dispatch(userLogout());
        dispatch(deleteToken());
        sessionStorage.clear();
        localStorage.removeItem('userData');
    };

    useEffect(() => {
        if (displaySize > theme.breakpoints.values.laptopL) {
            dispatch(setOpenColseToolbar(true));
        }
        navigate("/my_account/account")
    }, [displaySize]);
    const drawerWidth = 320;

    return (

        <Box sx={{display: 'flex'}}>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        position: 'inherit',
                        width: '320px',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        overflow: 'hidden',
                    }
                }}
                variant="persistent"
                anchor="left"
                open={openCloseToolbar}
            >
                <MyAccountPanelInterfaceContainer>
                    <MyAccountPanelInterfaceToolbarContainer>
                        <MyAccountPanelInterfaceToolbarWrapper>
                            <MyAccountPanelInterfaceToolbarText>Toolbar</MyAccountPanelInterfaceToolbarText>
                            <MyAccountPanelInterfaceToolbarArrowLeft onClick={handleDrawerClose}></MyAccountPanelInterfaceToolbarArrowLeft>
                        </MyAccountPanelInterfaceToolbarWrapper>
                    </MyAccountPanelInterfaceToolbarContainer>

                    <MyAccountPanelInterfaceToolbarButtonsContainer>
                        <Box sx={{ height: '100%' }}>
                            {myAccountPanelInterfaceButtons.map((button, index) => {
                                return (
                                    <Link style={{ textDecoration: "none" }} to={`${button.route}`} key={index} >
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
            </Drawer>

            <Box
                sx={{
                    width: '100%',
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    marginLeft: `-${drawerWidth}px`,
                    ...(openCloseToolbar && {
                        transition: theme.transitions.create('margin', {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        marginLeft: 0,
                    })
                }}
            >
                <Outlet></Outlet>
            </Box>

        </Box>
    )
}

export default MyAccountPanelInterface