/* eslint-disable react-hooks/exhaustive-deps */
import { ColorType, LineStyle, PriceLineOptions, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react'
import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { Chart } from 'lightweight-charts-react-wrapper';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { addMyLineSeries, changeChartTypeSeries, simpleIncomeLineSeries, volatilityLineSeries } from '../../Functions/lightWeightSeriesFunctions';
import LightWeightChartButtonsForAnalytics from './LightWeightChartButtonsForAnalytics';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';
import { putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>,
	isClickedToCompare: boolean
}

const LightWeightChartForAnalytics = ({ tickerData, tickerVolume, isClickedToCompare }: Props) => {
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const volatility: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.volatility);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const seriesName = useAppSelector(state => state.chartSeriesReducer.seriesName);
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const chart = createChart(chartContainerRef.current!, {
			width: chartContainerRef.current!.clientWidth,
			height: 600,
			layout: {
				background: { type: ColorType.Solid, color: 'rgba(25, 3, 47, 1)' },
				textColor: "#d1d4dc",
			},
			rightPriceScale: {
				scaleMargins: {
					top: 0.3,
					bottom: 0.25
				},
				borderVisible: false
			},
			grid: {
				vertLines: {
					color: "rgba(86, 92, 92, 0.7)"
				},
				horzLines: {
					color: "rgba(86, 92, 92, 0.7)"
				}
			}
		});
	
		const simpleIncomeData = JSON.parse(JSON.stringify(simpleIncome)) as AnalyticInterface;
		const volatilityData = JSON.parse(JSON.stringify(volatility)) as AnalyticInterface;
		const movAvgData = JSON.parse(JSON.stringify(movAvg)) as AnalyticInterface;

		if (movAvg.period > 0) {
			if (seriesName === ChartSeriesNames.LineSeriesForSimpleIncome) {
				dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
			}
			dispatch(putSimpleIncomePeriod(0));
			simpleIncomeData.simpleIncomeData!.length > 0  && chart.removeSeries(simpleIncomeLineSeries(chart, seriesName, simpleIncome, movAvg)!);
			const lineChart = addMyLineSeries(chart, movAvgData.movAvgData!, movAvg.color);
			const zeroLine: PriceLineOptions = {
				price: 0.00,
				color: '#be1238',
				lineWidth: 2,
				lineStyle: LineStyle.Solid,
				axisLabelVisible: true,
				title: 'zero price',
				lineVisible: true,
				axisLabelColor: movAvg.color,
				axisLabelTextColor: ''
			};
			lineChart.createPriceLine(zeroLine);
			if (interval !== "1D" || simpleIncome.period > 0) {
				lineChart.removePriceLine(lineChart.createPriceLine(zeroLine));
				chart.removeSeries(lineChart);
			}
		}

		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
		};

		changeChartTypeSeries(
			chart,
			tickerData,
			tickerVolume,
			seriesName!,
			movAvgData,
			simpleIncomeData,
			volatilityData
		);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [
		tickerData, 
		tickerVolume, 
		seriesName, 
		movAvg.period, 
		interval, 
		simpleIncome.period, 
		movAvg.movAvgData, 
		volatility.period,
		simpleIncome.simpleIncomeData,
		simpleIncome.simpleIncomeDataToCompare,
		volatility.volatilityData,
		volatility.volatilityDataToCompare,
	]);

	return (
		<ChartContainer ref={chartContainerRef} >
			<LightWeightChartButtonsForAnalytics isClickedToCompare={isClickedToCompare}/>
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChartForAnalytics