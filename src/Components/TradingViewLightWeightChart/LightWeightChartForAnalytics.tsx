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
import { putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';
import AnalyticChartInteface from '../Analytics/AnalyticChartInteface';
import { Box } from '@mui/material';

interface Props {
	analyticChartData: TickerDataVolumeType[] | undefined,
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>,
	handleGetSimpleIncome: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const LightWeightChartForAnalytics = ({ analyticChartData, tickerData, tickerVolume, handleGetSimpleIncome }: Props) => {
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const simpleIncome: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const seriesName = useAppSelector(state => state.chartSeriesReducer.seriesName);
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const boxRef = useRef<HTMLDivElement>(null);
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

		if (movAvg.period > 0) {
			if (seriesName === ChartSeriesNames.LineSeriesForSimpleIncome) {
				dispatch(putSeriesName(ChartSeriesNames.CandlesSeries));
			}
			dispatch(putSimpleIncomePeriod(0));
			chart.removeSeries(simpleIncomeChart(chart, analyticChartData!, simpleIncome.color, movAvg.period, seriesName)!);
			const lineChart = addMyLineSeries(chart, analyticChartData!, movAvg.color);
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
			chart.removeSeries(simpleIncomeChart(chart, analyticChartData!, simpleIncome.color, movAvg.period, seriesName)!);
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
			analyticChartData!,
			movAvg.period
		);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [analyticChartData, tickerData, tickerVolume, seriesName, movAvg.period, interval, simpleIncome.period]);

	return (
		<ChartContainer ref={chartContainerRef} >
			<LightWeightChartButtonsForAnalytics />
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChartForAnalytics