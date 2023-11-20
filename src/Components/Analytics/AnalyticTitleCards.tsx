import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { analyticTitleCards } from '../../Constants/ProjectConstants/analyticTitleCardsConstants';
import { Card, CardContent, Typography } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const AnalyticTitleCards = () => {

    const getBorderRadiusForCards = (index: number, analyticTitleCards: String[]) => {
        if (index === 0) {
            return '100px'
        }
    };

    return (
        <Grid container columns={{ desktop: 12.5 }}
            sx={{
                width: '100%',
                padding: '40px 0 60px 0'
            }}
        >
            {analyticTitleCards.map((item, index) => {
                return (
                    <Grid desktop={2.5} desktopOffset={0.5} key={index}>
                        <Card sx={{
                            minHeight: '185px',
                            backgroundColor: ' rgba(4, 3, 28, 0.6)',
                            boxShadow: '10px 10px 46px 0px rgba(65, 6, 240, 0.79)',
                            '& .MuiCardContent-root': {
                                padding: '0 30px'
                            },
                            borderTopLeftRadius: getBorderRadiusForCards(index, analyticTitleCards),
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography sx={{
                                    color: 'rgba(255, 146, 255, 1)',
                                    fontSize: '1.3rem',
                                    lineHeight: '31px'
                                }}>
                                    <AnalyticsIcon sx={{
                                        color: 'purple',
                                        float: 'left',
                                        fontSize: '28px',
                                        paddingRight: '5px',
                                    }} />
                                    {item}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid >
    )
}

export default AnalyticTitleCards