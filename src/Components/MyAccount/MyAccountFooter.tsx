import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'react-router-dom';
import { HeaderButtonsStyle, HeaderContainer } from '../../Styles/HeaderStyles/HeaderStyles';
import Logo from '../Home/Header/Logo';
import { headerButtons } from '../../Constants/ProjectConstants/headerConstants';
import { theme } from '../../Constants/MaterialConstants/theme';

const MyAccountFooter = () => {
    const [displaySize, setDisplaySize] = useState(window.screen.width);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDisplaySize(window.screen.width);
        });
    }, [displaySize]);

    return (
        <HeaderContainer>
            <Grid container sx={{ width: '100%' }} display={'flex'} alignItems={'center'}>
                {displaySize > theme.breakpoints.values.tablet &&
                    <Grid container sx={{ width: '100%' }}
                        laptop={8} laptopOffset={0.5}
                        laptopL={8} laptopLOffset={0.5}
                        desktop={8} desktopOffset={0.5}
                        desktopL={9} desktopLOffset={0.5}
                    >
                        {headerButtons.map((buttonText) => {
                            return (
                                <Grid key={buttonText.route} display={'flex'} justifyContent={'center'}
                                    laptopOffset={0.3}
                                    laptopLOffset={0.5}
                                    desktopOffset={1}
                                    desktopLOffset={1}

                                >
                                    <Link id={buttonText.route} to={`/${buttonText.route}`} key={buttonText.title}>
                                        <HeaderButtonsStyle disableRipple key={buttonText.route} >{buttonText.title}</HeaderButtonsStyle>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Grid>
                }


                <Grid
                    laptop={0.5} laptopOffset={1}
                    laptopL={0.5} laptopLOffset={1}
                    desktop={0.5} desktopOffset={1.5}
                    desktopL={0.5} desktopLOffset={1}
                >
                    <Link to={`/home`}>
                        <HeaderButtonsStyle disableRipple>
                            <Logo />
                        </HeaderButtonsStyle>
                    </Link>
                </Grid>
            </Grid >
        </HeaderContainer >
    )
}

export default MyAccountFooter