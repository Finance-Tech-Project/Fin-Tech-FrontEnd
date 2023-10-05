import React from 'react'
import { ChartButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { ChartButtonForAnalytic, chartButtonForAnalytic, chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';
import { putMovAvgData, putSimpleIncomeData, putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';
import { getDataForAnalyticChartSimpleIncome } from '../../Actions/fetchDispatchActions';
import { AnalyticInterface } from '../../Types/AnalyticTypes';

const LightWeightChartButtonsForAnalytics = () => {
	const dispatch = useAppDispatch();
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);

	const handleChangeSeries = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		dispatch(putSeriesName(event.currentTarget.firstChild?.nodeValue?.toLowerCase().trim()! as ChartSeriesNames));
		dispatch(putSimpleIncomePeriod(0));
		dispatch(putSimpleIncomeData([]));
	};

	const handleChangeTimeRange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		chartButtonForAnalytic.forEach((button) => {
			if (button.title === event.currentTarget.childNodes[0].textContent) {
				dispatch(putCurrentDateFrom(button.dateFrom));
				dispatch(putCurrentDateTo(button.dateTo));
				dispatch(putMovAvgData([]));
				dispatch(getDataForAnalyticChartSimpleIncome(
					symbolName.symbolName, 
					symbolName.symbolNameToCompare, 
					simpleIncome.period, 
					button.dateFrom, 
					button.dateTo
				));
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