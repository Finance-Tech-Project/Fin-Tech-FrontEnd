import React, { useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
    MyAccountPanelInterfaceContainer,
    MyAccountPanelInterfaceToolbarArrowLeft,
    MyAccountPanelInterfaceToolbarArrowRight,
    MyAccountPanelInterfaceToolbarButtonLogout,
    MyAccountPanelInterfaceToolbarButtonLogoutContainer,
    MyAccountPanelInterfaceToolbarButtonsContainer,
    MyAccountPanelInterfaceToolbarContainer,
    MyAccountPanelInterfaceToolbarText,
    MyAccountPanelInterfaceToolbarWrapper
} from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle';
import { Box, Collapse, Drawer } from '@mui/material';
import MyAccountPanelInterfaceItem from './MyAccounPaneltInterfaceItem';
import { myAccountPanelInterfaceButtons } from '../../Constants/ProjectConstants/myAccountPanelInterfaceConstants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { userLogout } from '../../Reducers/userReducer';
import { deleteToken } from '../../Reducers/tokenReducer';
import { Link, Outlet } from 'react-router-dom';
import { theme } from '../../Constants/MaterialConstants/theme';
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer';

const MyAccountPanelInterface = () => {
    const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const dispatch = useAppDispatch();

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
    }, [displaySize]);
    const drawerWidth = 320;

    return (

        <Box
            sx={{
                display: 'flex'
            }}
        >
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
                <MyAccountPanelInterfaceContainer open={open}>
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
                    }),
                }}
            >
                {/* {!open && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>} */}
                <Outlet></Outlet>
            </Box>

        </Box>
    )
}

export default MyAccountPanelInterface