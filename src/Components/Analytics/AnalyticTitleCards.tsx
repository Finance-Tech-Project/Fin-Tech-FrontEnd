import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { analyticTitleCards } from '../../Constants/ProjectConstants/analyticTitleCardsConstants';
import { Card, CardContent, Typography } from '@mui/material';

import { AnalyticTitleCardContainer, AnalyticTitleCardGridContainerStyle, AnalyticTitleCardIcon, AnalyticTitleCardTypography } from '../../Styles/AnalyticStyles/AnalyticTitleStyle';
import { theme } from '../../Constants/MaterialConstants/theme';

const AnalyticTitleCards = () => {

    return (
        <Grid container columns={{ mobileS: 12, desktop: 12.5 }}
            sx={() => AnalyticTitleCardGridContainerStyle(theme)}
        >
            {analyticTitleCards.map((item, index) => {
                return (
                    <Grid key={index}
                        mobileS={11} mobileSOffset={0.5}
                        tablet={10} tabletOffset={1}
                        laptop={5.25} laptopOffset={0.5}
                        desktop={2.5} desktopOffset={0.5} 
                    >
                        <AnalyticTitleCardContainer>
                            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                                <AnalyticTitleCardTypography>
                                    <AnalyticTitleCardIcon />
                                    {item}
                                </AnalyticTitleCardTypography>
                            </CardContent>
                        </AnalyticTitleCardContainer>
                    </Grid>
                );
            })}
        </Grid >
    )
}

export default AnalyticTitleCards