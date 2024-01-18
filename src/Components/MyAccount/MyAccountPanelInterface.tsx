/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {
    DrawerStyle,
    MyAccountItemContainer,
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
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
        navigate("/my_account/account")
    }, []);


    return (
        <Box>
            <Drawer
                sx={() => DrawerStyle(theme)}
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
                        <Box>
                            {myAccountPanelInterfaceButtons.map((button, index) => {
                                return (
                                    <Link style={{ textDecoration: "none" }} to={`${button.route}`} key={index} >
                                        <MyAccountPanelInterfaceItem context={button.title} icon={button.icon} />
                                    </Link>
                                );
                            })}
                        </Box>
                    </MyAccountPanelInterfaceToolbarButtonsContainer>

                    <MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                        <Link to="/home">
                            <MyAccountPanelInterfaceToolbarButtonLogout
                                onClick={handleLogout}
                                disableRipple>
                                Logout
                            </MyAccountPanelInterfaceToolbarButtonLogout>
                        </Link>
                    </MyAccountPanelInterfaceToolbarButtonLogoutContainer>
                </MyAccountPanelInterfaceContainer>
            </Drawer>

            <MyAccountItemContainer>
                <Outlet></Outlet>
            </MyAccountItemContainer>
        </Box>
    )
}

export default MyAccountPanelInterface