import React from 'react'
import { StocksRecommendationTrendsContainer } from '../../Styles/StocksStyles/StocksRecommendationTrendsStyle'
import { Typography, Divider, Box } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StocksRecommendationTrends = () => {
    const data = [
        {
            name: 'Jun',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Jul',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Aug',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Sep',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        }
    ];

    return (
        <StocksRecommendationTrendsContainer>
            <Typography variant='h4' sx={{ color: 'yellow', textAlign: 'start', padding: '10px 0 10px 0' }}>Recommendation trends</Typography>
            <Divider sx={{ backgroundColor: '#966fbd', borderStyle: 'solid', borderWidth: '3px', height: '99%' }} />

            <Box sx={{ width: '100%', height: '500px', paddingTop: '20px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend layout='vertical' verticalAlign='middle' align='right' wrapperStyle={{right: -5, fontSize: '1.2rem'}} />
                        <Bar dataKey="pv" stackId="a" fill="rgb(255, 51, 58)" name="Sell" barSize={40} />
                        <Bar dataKey="uv" stackId="a" fill="rgb(255, 163, 62)" name="Underperform"/>
                        <Bar dataKey="pv" stackId="a" fill="rgb(255, 220, 72)" name="Hold" />
                        <Bar dataKey="uv" stackId="a" fill="rgb(0, 192, 115)" name="Buy"/>
                    </BarChart>
                </ResponsiveContainer>
            </Box>
        </StocksRecommendationTrendsContainer>
    )
}

export default StocksRecommendationTrends