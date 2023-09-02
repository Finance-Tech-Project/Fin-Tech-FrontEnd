import React from 'react'
import { ChartButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { chartButtonsPeriod, chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';

interface Props {
	handleChangeSeries: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightWeightChartButtons = ({ handleChangeSeries }: Props) => {
	return (
		<ChartContainerWrapper>
			<ChartButtonsContainer>
				{chartButtonsPeriod.map((button) => {
					return (
						<ChartButtons key={button} variant="contained">{button}</ChartButtons>
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