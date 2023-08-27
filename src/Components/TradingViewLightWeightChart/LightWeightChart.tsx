/* eslint-disable no-lone-blocks */
import { Chart } from 'lightweight-charts-react-wrapper';
import React, { useEffect, useRef, useState } from 'react'
import { ColorType, IChartApi, createChart } from 'lightweight-charts';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';
import { chartButtonsSeries } from '../../Constants/ProjectConstants/chartButtonsConstants';
import { ChartContainer, ChartContainerSeriesButtonsContainer, ChartContainerWrapper } from '../../Styles/LightWeightChartStyle';

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>
}

const LightWeightChart = ({ tickerData, tickerVolume }: Props) => {
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const [selectedSeries, setSelectedSeries] = useState<string | undefined>('candles')


	const handleChangeSeries = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setSelectedSeries(event.currentTarget.firstChild?.nodeValue?.toLowerCase().trim());
	};

	const lineSeries = (chart: IChartApi) => {
		const lineChart = chart.addLineSeries({});
		const lineData: Array<TickerDataVolumeType> = tickerData.map((ticker) => ({
			time: ticker.time,
			value: (ticker.close + ticker.open) / 2,
		}));
		lineChart.setData(lineData);
	};

	const defaultSeries = (chart: IChartApi) => {
		const lineData: Array<TickerDataVolumeType> = tickerData.map((ticker) => ({
			time: ticker.time,
			value: (ticker.close + ticker.open) / 2,
		}));

		// Add an area series to the chart,
		// Adding this before we add the candlestick chart
		// so that it will appear beneath the candlesticks
		const areaSeries = chart.addAreaSeries({
			lastValueVisible: false, // hide the last value marker for this series
			crosshairMarkerVisible: false, // hide the crosshair marker for this series
			lineColor: 'transparent', // hide the line
			topColor: 'rgba(56, 33, 110,0.6)',
			bottomColor: 'rgba(56, 33, 110, 0.1)',
		});
		// Set the data for the Area Series
		areaSeries.setData(lineData);

		const candleStickSeries = chart.addCandlestickSeries({
			wickUpColor: 'rgb(54, 116, 217)',
			upColor: 'rgb(54, 116, 217)',
			wickDownColor: 'rgb(225, 50, 85)',
			downColor: 'rgb(225, 50, 85)',
			borderVisible: false,
		});
		candleStickSeries.setData(tickerData);

		const histogramSeries = chart.addHistogramSeries({ priceScaleId: '', color: 'rgb(54, 116, 217)' });
		histogramSeries.priceScale().applyOptions({
			// set the positioning of the volume series
			scaleMargins: {
				top: 0.9, // highest point of the series will be 70% away from the top
				bottom: 0,
			}
		});
		histogramSeries.setData(tickerVolume);
	};

	const barSeries = (chart: IChartApi) => {
		const barChart = chart.addBarSeries({});
		barChart.setData(tickerData);
	};
	const areaSeries = (chart: IChartApi) => {
		const areaChart = chart.addAreaSeries({});
		const lineData: Array<TickerDataVolumeType> = tickerData.map((ticker) => ({
			time: ticker.time,
			value: (ticker.close + ticker.open) / 2,
		}));
		areaChart.setData(lineData);
	};

	useEffect(() => {

		const chart = createChart(chartContainerRef.current!, {
			width: chartContainerRef.current!.clientWidth,
			height: 580, // height: chartContainerRef.current!.clientHeight,
			layout: {
				background: { type: ColorType.Solid, color: 'rgba(23, 27, 27, 1)' },
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

		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
		};

		{ selectedSeries === 'line' && lineSeries(chart) }
		{ selectedSeries === 'candles' && defaultSeries(chart) }
		{ selectedSeries === 'bar' && barSeries(chart) }
		{ selectedSeries === 'area' && areaSeries(chart) }
	
			chart.timeScale().fitContent();
		
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [tickerData, tickerVolume, selectedSeries]);

	return (

		<ChartContainer ref={chartContainerRef}>
			<ChartContainerWrapper>
				{/* <Box>
					{chartButtonsPeriod.map((button) => {
						return (
							<ChartButtons key={button} variant="contained">{button}</ChartButtons>
						);
					})}
				</Box> */}

				<ChartContainerSeriesButtonsContainer>
					{chartButtonsSeries.map((button) => {
						return (
							<ChartButtons key={button} onClick={handleChangeSeries} variant="contained">{button}</ChartButtons>
						);
					})}
				</ChartContainerSeriesButtonsContainer>
			</ChartContainerWrapper>
			
				<Chart {...chartContainerRef.current} autoSize={true}>
				</Chart>
		
		</ChartContainer>
	)
}

export default LightWeightChart