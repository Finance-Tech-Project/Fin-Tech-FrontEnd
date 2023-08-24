import { AreaSeries, CandlestickSeries, Chart, HistogramSeries, LineSeries } from 'lightweight-charts-react-wrapper';
import React, { DetailedHTMLProps, HTMLAttributes, LegacyRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import { priceData } from '../../Constants/LightWeightChartData/priceData';
import { ChartOptions, ColorType, IChartApi, LineData, WhitespaceData, createChart } from 'lightweight-charts';
import { volumeData } from '../../Constants/LightWeightChartData/volumeData';
import { areaData } from '../../Constants/LightWeightChartData/areaData';
import data from '../../DataFiles/data.json'
import { Box, Button } from '@mui/material';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { setTimeout } from 'timers/promises';
import { getDefaultTickerData } from '../../FetchActions/fetchActions';
import { delimiterDataToPeriods } from '../../FetchActions/dataProcessingFunctions';
import { MAIN_DATA, VOLUME_DATA } from '../../Constants/fetchConstants';
import { ChartButtons } from '../../Styles/TickersStyles/TickersStyles';


const parseData = (param: number) => {
	if (param === 0) {
		const data1 = data.map((data) => {
			return {
				time: data.date,
				value: data.apy
			}
		});
		return data1;
	}
	const data2 = data.map((data) => {
		return {
			time: data.date,
			value: data.close
		}
	});
	return data2;
}

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>
}

const LightWeightChart = ({ tickerData, tickerVolume }: Props) => {
	const [dataAPY, setDataAPY] = useState<Array<LineData | WhitespaceData>>(parseData(0));
	const [dataClose, setDataClose] = useState<Array<LineData | WhitespaceData>>(parseData(1));
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
			height: 600, // height: chartContainerRef.current!.clientHeight,
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
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth});
		};

		{selectedSeries === 'line' && lineSeries(chart)} 
		{selectedSeries === 'candles' && defaultSeries(chart)} 
		{selectedSeries === 'bar' && barSeries(chart)} 
		{selectedSeries === 'area' && areaSeries(chart)} 
		
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [tickerData, tickerVolume, selectedSeries]);



	console.log(selectedSeries)

	return (

		<Box sx={{ width: '100%', maxHeight: '650px', border: '1.5px solid rgba(121, 208, 13, 0.8)' }} ref={chartContainerRef}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(23, 27, 27, 1)', borderBottom: '0.5px solid rgba(86, 92, 92, 0.7)' }}>
				<Box>
					<ChartButtons variant="contained">1D</ChartButtons>
					<ChartButtons variant="contained">1W</ChartButtons>
					<ChartButtons variant="contained">1M</ChartButtons>
					<ChartButtons variant="contained">1Y</ChartButtons>
				</Box>

				<Box>
					<ChartButtons onClick={handleChangeSeries} variant="contained">Candles</ChartButtons>
					<ChartButtons onClick={handleChangeSeries} variant="contained">Line</ChartButtons>
					<ChartButtons onClick={handleChangeSeries} variant="contained">Bar</ChartButtons>
					<ChartButtons onClick={handleChangeSeries} variant="contained">Area</ChartButtons>
				</Box>
			</Box>

			<Chart {...chartContainerRef.current} autoSize={true}>
				{/* <CandlestickSeries
					data={priceData}
					upColor="rgba(38,198,218, 0.56)"
					downColor="rgba(38,198,218, 0.04)"
					baseLineColor="rgba(38,198,218, 1)"
					baseLineWidth={2}
				/>
				<HistogramSeries
					data={areaData}
					priceScaleId=""
					color="#1921d4"
					priceFormat={{ type: "volume" }}
				/> */}
				{/* <AreaSeries
						data={areaData}
						topColor="rgba(38,198,218, 0.56)"
						bottomColor="rgba(38,198,218, 0.04)"
						lineColor="rgba(38,198,218, 1)"
						lineWidth={2}
					/> */}
				{/* <LineSeries data={dataAPY} />
				<LineSeries data={dataClose} color="rgba(234,13,17, 92)"/> */}
			</Chart>
		</Box>
	)
}

export default LightWeightChart