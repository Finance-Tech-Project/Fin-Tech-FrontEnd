/* eslint-disable react-hooks/exhaustive-deps */
import { ColorType, LineStyle, PriceLineOptions, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react'
import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { Chart } from 'lightweight-charts-react-wrapper';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { addMyLineSeries, changeChartTypeSeries, simpleIncomeChart } from '../../Functions/lightWeightSeriesFunctions';
import LightWeightChartButtonsForAnalytics from './LightWeightChartButtonsForAnalytics';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { putSeriesName } from '../../Reducers/chartSeriesReducer';
import { ChartSeriesNames } from '../../Enums/Enums';
import { putSimpleIncomeData, putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';
import AnalyticChartInteface from '../Analytics/AnalyticChartInteface';
import { Box } from '@mui/material';
import { createHistogramLineAreaData } from '../../Functions/dataProcessingFunctions';

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>
}

const LightWeightChartForAnalytics = ({ tickerData, tickerVolume }: Props) => {
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
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
	
		const simpleIncomeData = JSON.parse(JSON.stringify(simpleIncome.simpleIncomeData));
		const movAvgData = JSON.parse(JSON.stringify(movAvg.movAvgData));

		

		if (movAvg.period > 0) {
			if (seriesName === ChartSeriesNames.LineSeriesForSimpleIncome) {
				dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
			}
			dispatch(putSimpleIncomePeriod(0));
			
			simpleIncomeData.length > 0  && chart.removeSeries(simpleIncomeChart(chart, simpleIncomeData, simpleIncome.color, movAvg.period, seriesName)!);
			// const movAvgData = movAvg.movAvgData.map((data) => {
			// 	const res: TickerDataVolumeType = {
			// 		time: data.time,
			// 		value: data.value!
			// 	}
			// 	return res;
			// })
			
			
			const lineChart = addMyLineSeries(chart, movAvgData!, movAvg.color);
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

		if (interval !== "1D" || movAvg.period > 0 || seriesName !== ChartSeriesNames.LineSeriesForSimpleIncome) {
			simpleIncomeData.length > 0  && chart.removeSeries(simpleIncomeChart(chart, simpleIncomeData!, simpleIncome.color, movAvg.period, seriesName)!);
		}

		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
		};

		changeChartTypeSeries(
			seriesName!,
			tickerData,
			tickerVolume,
			chart,
			simpleIncome.color,
			movAvgData,
			simpleIncomeData,
			movAvg.period
		);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [tickerData, tickerVolume, seriesName, movAvg.period, interval, simpleIncome.period, movAvg.movAvgData, simpleIncome.simpleIncomeData]);

	return (
		<ChartContainer ref={chartContainerRef} >
			<LightWeightChartButtonsForAnalytics />
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChartForAnalytics