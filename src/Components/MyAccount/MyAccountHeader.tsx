import React, { useEffect, useState } from 'react';
import { MyAccountHeaderAvatar, MyAccountHeaderContainer, MyAccountHeaderRegisterNameContainer, MyAccountHeaderTypography } from '../../Styles/MyAccountStyles/MyAccountHeaderStyle';
import Logo from '../Home/Header/Logo';
import { Box, ClickAwayListener, Collapse } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';
import { HeaderButtonsStyle, HeaderMenuIconButton, HeaderMenuIconStyle } from '../../Styles/HeaderStyles/HeaderStyles';
import { theme } from '../../Constants/MaterialConstants/theme';
import HeaderResponsive from '../Home/Header/HeaderResponsive';
import { useAppSelector } from '../../app/hooks';
import { UserProfile } from '../../Types/LoginRegisterTypes';
import PersonIcon from '@mui/icons-material/Person';
import { createUserLoginInitials } from '../../Functions/utilsFunctions';

const MyAccountHeader = () => {
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);
    const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
    const [isClicked, setIsClicked] = useState(true);

    const handleClickAway = (event: MouseEvent | TouchEvent) => {
        if (event.type === 'click') {
			setIsClicked(true);
		} 
    };

    const handleClick = () => {
        setIsClicked(prev => prev !== isClicked);
    };

    useEffect(() => {
        return () => setIsClicked(true);
    }, [isClicked]);

    return (
        <MyAccountHeaderContainer>
            <Grid container sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Grid sx={{ display: 'flex', alignItems: 'center' }}
                    mobileS={2} mobileSOffset={2.5}
                    mobileM={2} mobileMOffset={2}
                    mobileL={2} mobileLOffset={2.5}
                    tablet={2} tabletOffset={0.5}
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
                    mobileS={8} mobileSOffset={1}
                    mobileM={7} mobileMOffset={2}
                    mobileL={6} mobileLOffset={2.5}
                    tablet={4} tabletOffset={4}
                    laptop={3.5} laptopOffset={6}
                    laptopL={2.5} laptopLOffset={7}
                    desktop={2} desktopOffset={7.5}

                >
                    <MyAccountHeaderRegisterNameContainer>
                        <MyAccountHeaderAvatar>{!userProfile ? <PersonIcon sx={{fontSize: '30px'}}/> 
                            : createUserLoginInitials(userProfile.firstName, userProfile.lastName)}</MyAccountHeaderAvatar>
                        <MyAccountHeaderTypography>{userProfile && userProfile.firstName + " " + userProfile.lastName}</MyAccountHeaderTypography>
                    </MyAccountHeaderRegisterNameContainer>
                </Grid>

                {displaySize < theme.breakpoints.values.laptop &&
                    <Grid
                        tablet={1} tabletOffset={0}
                    >
                        <ClickAwayListener onClickAway={event => handleClickAway(event)} >
                            <HeaderMenuIconButton disableRipple onClick={handleClick}>
                                <HeaderMenuIconStyle />
                            </HeaderMenuIconButton>
                        </ClickAwayListener>
                    </Grid>
                }

                <Box sx={{ width: '100%' }}>
                    {!isClicked && (
                        <Collapse in={!isClicked} timeout="auto">
                            <HeaderResponsive isClicked={isClicked} handleClick={handleClick}></HeaderResponsive>
                        </Collapse>
                    )}
                </Box>
            </Grid>
        </MyAccountHeaderContainer>
    )
}

export default MyAccountHeader