/* eslint-disable react-hooks/exhaustive-deps */
import { ColorType, LineStyle, PriceLineOptions, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react'
import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { Chart } from 'lightweight-charts-react-wrapper';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { addMyLineSeries, changeChartTypeSeries, createLineSeriesForCalculationsDataInStocks } from '../../Functions/lightWeightSeriesFunctions';
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
	const sharpRatio: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.sharpRatio);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const seriesName = useAppSelector(state => state.chartSeriesReducer.seriesName);
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const dispatch = useAppDispatch();

	const simpleIncomeData = JSON.parse(JSON.stringify(simpleIncome)) as AnalyticInterface;
	const volatilityData = JSON.parse(JSON.stringify(volatility)) as AnalyticInterface;
	const movAvgData = JSON.parse(JSON.stringify(movAvg)) as AnalyticInterface;
	const sharpRatioData = JSON.parse(JSON.stringify(sharpRatio)) as AnalyticInterface;

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
					bottom: 0.3
				},
				borderVisible: true
			},
			grid: {
				vertLines: {
					color: "rgba(86, 92, 92, 0.7)"
				},
				horzLines: {
					color: "rgba(86, 92, 92, 0.7)"
				}
			},
			localization: {
				locale: "en"
			}
		});

		if (movAvg.period > 0) {
			if (seriesName === ChartSeriesNames.LineSeriesForSimpleIncome) {
				dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
			}
			dispatch(putSimpleIncomePeriod(0));
			simpleIncomeData.data.length > 0 && chart.removeSeries(createLineSeriesForCalculationsDataInStocks(chart, seriesName, simpleIncome)!);
			const lineChart = addMyLineSeries(chart, movAvgData.data, movAvg.color);
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
			volatilityData,
			sharpRatioData
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
		volatility.period,
		sharpRatio.period,
		movAvgData.data,
		// simpleIncomeData.data,
		// simpleIncomeData.dataToCompare,
		// volatilityData.data,
		// volatilityData.dataToCompare,
		// sharpRatioData.data,
		// sharpRatioData.dataToCompare
	]);

	return (
		<ChartContainer ref={chartContainerRef} >
			<LightWeightChartButtonsForAnalytics isClickedToCompare={isClickedToCompare} />
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChartForAnalytics