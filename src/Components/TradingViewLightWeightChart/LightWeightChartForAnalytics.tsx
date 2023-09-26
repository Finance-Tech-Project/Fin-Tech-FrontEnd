import { ColorType, LineStyle, PriceLineOptions, createChart } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react'
import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { Chart } from 'lightweight-charts-react-wrapper';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { addMyLineSeries, changeChartTypeSeries } from '../../Functions/lightWeightSeriesFunctions';
import LightWeightChartButtonsForAnalytics from './LightWeightChartButtonsForAnalytics';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AnalyticInterface } from '../../Types/AnalyticTypes';
import { putMovAvgPeriod, putSimpleIncomePeriod } from '../../Reducers/analyticIterfaceReducer';

interface Props {
	data: TickerDataVolumeType[] | undefined,
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>
}

const LightWeightChartForAnalytics = ({ data, tickerData, tickerVolume }: Props) => {
	const movAvg: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.movAvg);
	const simpleIncom: AnalyticInterface = useAppSelector(state => state.analyticInterfaceReducer.simpleIncome);
	const interval = useAppSelector(state => state.intervalDataReducer);
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const [selectedSeries, setSelectedSeries] = useState<string | undefined>('candles')
	const dispatch = useAppDispatch();
	
	const handleChangeSeries = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setSelectedSeries(event.currentTarget.firstChild?.nodeValue?.toLowerCase().trim());
	};

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
			const lineChart = addMyLineSeries(chart, data!, movAvg.color);
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
			if (interval !== "1D" || simpleIncom.period > 0) {
				dispatch(putMovAvgPeriod(0));
				chart.removeSeries(lineChart);
			}
		}

		if (simpleIncom.period > 0) {
			const lineChart = addMyLineSeries(chart, data!, simpleIncom	.color);
			const zeroLine: PriceLineOptions = {
				price: 0.00,
				color: '#be1238',
				lineWidth: 2,
				lineStyle: LineStyle.Solid,
				axisLabelVisible: true,
				title: 'zero %',
				lineVisible: true,
				axisLabelColor: simpleIncom	.color,
				axisLabelTextColor: ''
			};
			lineChart.createPriceLine(zeroLine);
			lineChart.applyOptions({
				priceFormat: {
					type: "percent"
				}
			});
			if (interval !== "1D" || movAvg.period > 0) {
				dispatch(putSimpleIncomePeriod(0));
				chart.removeSeries(lineChart);
			}
		}
	
		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
		};

		changeChartTypeSeries(selectedSeries!, tickerData, tickerVolume, chart);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [data, tickerData, tickerVolume, selectedSeries, movAvg.period, interval, simpleIncom.period]);
	
	return (
		<ChartContainer ref={chartContainerRef}>

			<LightWeightChartButtonsForAnalytics handleChangeSeries={handleChangeSeries} />
			<Chart {...chartContainerRef.current}  autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChartForAnalytics