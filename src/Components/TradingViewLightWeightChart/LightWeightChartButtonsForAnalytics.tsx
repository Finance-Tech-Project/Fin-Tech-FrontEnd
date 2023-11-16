import React from 'react'
import { ChartButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { ChartButtonForAnalytic, chartButtonForAnalytic, chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { putCurrentDateFrom, putCurrentDateTo } from '../../Reducers/dateDataReducer';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames, DefaultPeriods } from '../../Enums/Enums';
import { putMovAvgData, putSimpleIncomeData, putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';
import { getDataForAnalyticChartSimpleIncome, getDataForAnalyticChartVolatility } from '../../Actions/fetchDispatchActions';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
interface Props {
	isClickedToCompare: boolean
}
const LightWeightChartButtonsForAnalytics = ({ isClickedToCompare }: Props) => {
	const dispatch = useAppDispatch();
	const symbolName = useAppSelector(state => state.selectedSymbolReducer);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);

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
				if (simpleIncome.period === 0) {
					dispatch(getDataForAnalyticChartSimpleIncome(
						symbolName.symbolName,
						symbolName.symbolNameToCompare,
						DefaultPeriods.SimpleIncomeDefaultPeriod,
						button.dateFrom,
						button.dateTo
					));
				} else {
					dispatch(getDataForAnalyticChartSimpleIncome(
						symbolName.symbolName,
						symbolName.symbolNameToCompare,
						simpleIncome.period,
						button.dateFrom,
						button.dateTo
					));
				}
				if (volatility.period === 0) {
					dispatch(getDataForAnalyticChartVolatility(
						symbolName.symbolName,
						symbolName.symbolNameToCompare,
						DefaultPeriods.VolatilityDefaultPeriod,
						button.dateFrom,
						button.dateTo
					));
				} else {
					dispatch(getDataForAnalyticChartVolatility(
						symbolName.symbolName,
						symbolName.symbolNameToCompare,
						volatility.period,
						button.dateFrom,
						button.dateTo
					));
				}
			}
		})
	};

	return (
		<ChartContainerWrapper>
			<ChartButtonsContainer>
				{chartButtonForAnalytic.map((button: ChartButtonForAnalytic) => {
					return (
						<ChartButtons onClick={handleChangeTimeRange} key={button.title} variant="contained">{button.title}</ChartButtons>
					);
				})}
			</ChartButtonsContainer>

			{!isClickedToCompare && <ChartButtonsContainer>
				{chartButtonsSeries.map((button) => {
					return (
						<ChartButtons key={button} onClick={handleChangeSeries} variant="contained">{button}</ChartButtons>
					);
				})}
			</ChartButtonsContainer>}
		</ChartContainerWrapper>
	)
}

export default LightWeightChartButtonsForAnalytics