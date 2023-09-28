import React from 'react'
import { ChartButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { chartButtonsPeriod, chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';
import { putDataInterval } from '../../Reducers/intervalDataReducer';
import { useAppDispatch } from '../../app/hooks';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';

const LightWeightChartButtons = () => {
	const dispatch = useAppDispatch();

	const handleChangeSeries = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(putSeriesName(event.currentTarget.firstChild?.nodeValue?.toLowerCase().trim()! as ChartSeriesNames));
	};

	const handlePeriodClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(putDataInterval(event.currentTarget.firstChild?.nodeValue));
	};

	return (
		<ChartContainerWrapper>
			<ChartButtonsContainer>
				{chartButtonsPeriod.map((button) => {
					return (
						<ChartButtons key={button} onClick={handlePeriodClick} variant="contained">{button}</ChartButtons>
					);
				})}
			</ChartButtonsContainer>

			<ChartButtonsContainer>
				{chartButtonsSeries.map((button) => {
					return (
						<ChartButtons key={button} onClick={handleChangeSeries} variant="contained">{button}</ChartButtons>
					);
				})}
			</ChartButtonsContainer>
		</ChartContainerWrapper>
	)
}

export default LightWeightChartButtons