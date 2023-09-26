import React from 'react'
import { ChartButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { ChartButtonForAnalytic, chartButtonForAnalytic, chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';
import { useAppDispatch } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';

interface Props {
	handleChangeSeries: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightWeightChartButtonsForAnalytics = ({ handleChangeSeries }: Props) => {
	const dispatch = useAppDispatch();

	const handleChangeTimeRange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		
		chartButtonForAnalytic.forEach((button) => {
			if (button.title === event.currentTarget.childNodes[0].textContent) {
				dispatch(putCurrentDateFrom(button.dateFrom));
				dispatch(putCurrentDateTo(button.dateTo));
			}
		})
	};

	return (
		<ChartContainerWrapper>
			<ChartButtonsContainer>
				{chartButtonForAnalytic.map((button: ChartButtonForAnalytic) =>	{
					return (
						<ChartButtons onClick={handleChangeTimeRange} key={button.title} variant="contained">{button.title}</ChartButtons>
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

export default LightWeightChartButtonsForAnalytics