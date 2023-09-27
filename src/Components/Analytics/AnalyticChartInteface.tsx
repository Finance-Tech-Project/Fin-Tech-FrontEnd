/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putMovAvgPeriod, putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';
import { MainTickersTextField } from '../../Styles/MainStyles/MainFindTickerStyle';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { MainButton } from '../../Styles/MainStyles/MainContextStyle';

interface Props {
    handleGetSimpleIncome: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnalyticChartInteface = ({ handleGetSimpleIncome }: Props) => {
    const [number, setNumber] = useState<number | string>('');
    const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
    const [checked50Days, setChecked50Days] = useState(false);
    const [checked200Days, setChecked200Days] = useState(false);
    const dispatch = useAppDispatch();

    const handleChange50Days = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(putMovAvgPeriod(50));
        setChecked50Days(true);
        setChecked200Days(false);
        setNumber('');
    };

    const handleChange200Days = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(putMovAvgPeriod(200));
        setChecked200Days(true);
        setChecked50Days(false);
        setNumber('');
    };

    const handleChangeTextFieldNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNumber(+event.target.value);
        dispatch(putSimpleIncomePeriod(+event.target.value));
        if (+event.target.value >= 21 || +event.target.value === 0) {
            setNumber('');
        }
        if (+event.target.value > 0) {
            dispatch(putMovAvgPeriod(0));
            setChecked50Days(false);
            setChecked200Days(false); 
        }
    };

    return (
        <Box sx={{ border: '1px solid rgba(70, 75, 114, 0.8)', height: '640px', width: '450px', backgroundColor: 'rgba(2, 1, 31, 1)' }}>
            <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Divider orientation='horizontal' sx={{ backgroundColor: 'red', borderWidth: '3px', width: '120px', marginRight: '20px' }}></Divider>
                    <Typography sx={{ color: 'white' }} variant='h5'>Moving Average</Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FormGroup sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <FormControlLabel sx={{
                            color: 'white',
                            '& .MuiSvgIcon-root': { color: 'rgb(73 91 238 / 80%)' }
                        }}
                            control={<Checkbox checked={checked50Days} onChange={handleChange50Days} />}
                            label="50 days period"
                        />
                        <FormControlLabel sx={{
                            color: 'white',
                            marginRight: 0,
                            '& .MuiSvgIcon-root': { color: 'rgb(73 91 238 / 80%)' },
                        }}
                            control={<Checkbox checked={checked200Days} onChange={handleChange200Days} />}
                            label="200 days period"

                        />
                    </FormGroup>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
                    <Divider orientation='horizontal' sx={{ backgroundColor: 'yellow', borderWidth: '3px', width: '120px', marginRight: '20px' }}></Divider>
                    <Typography sx={{ color: 'white' }} variant='h5'>Simple Income</Typography>
                </Box>
                <MainTickersTextField
                    type="number"
                    variant="outlined"
                    label="Enter period in years"
                    sx={{ marginTop: '10px' }}
                    value={number}
                    onChange={(event) => handleChangeTextFieldNumber(event)}
                >
                </MainTickersTextField>
                <MainButton onClick={handleGetSimpleIncome} marginTop sx={{ width: '100%' }}>Get Simple Income</MainButton>
            </Box>
        </Box>
    )
}

export default AnalyticChartInteface