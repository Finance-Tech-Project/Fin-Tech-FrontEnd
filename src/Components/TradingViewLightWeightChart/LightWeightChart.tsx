import { AreaSeries, CandlestickSeries, Chart, HistogramSeries, LineSeries } from 'lightweight-charts-react-wrapper';
import React, { DetailedHTMLProps, HTMLAttributes, LegacyRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import { priceData } from '../../Constants/LightWeightChartData/priceData';
import { ChartOptions, ColorType, LineData, WhitespaceData, createChart } from 'lightweight-charts';
import { volumeData } from '../../Constants/LightWeightChartData/volumeData';
import { areaData } from '../../Constants/LightWeightChartData/areaData';
import data from '../../DataFiles/data.json'
import { Box } from '@mui/material';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';
import { setTimeout } from 'timers/promises';


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

	// const options: any = {
	// 	width: 1300,
	// 	height: 600,
	// 	rightPriceScale: {
	// 		scaleMargins: {
	// 			top: 0.3,
	// 			bottom: 0.25
	// 		},
	// 		borderVisible: false
	// 	},
	// 	layout: {
	// 		background: {
	// 			type: ColorType.Solid,
	// 			color: "#131722"
	// 		},
	// 		textColor: "#d1d4dc"
	// 	},
	// 	grid: {
	// 		vertLines: {
	// 			color: "rgba(42, 46, 57, 0)"
	// 		},
	// 		horzLines: {
	// 			color: "rgba(42, 46, 57, 0.6)"
	// 		}
	// 	}
	// };



	useEffect(() => {

		const chart = createChart(chartContainerRef.current!, {
			width: chartContainerRef.current!.clientWidth,
			height: chartContainerRef.current!.clientHeight,
			layout: {
				background: { type: ColorType.Solid, color: '#131722' },
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
					color: "rgba(42, 46, 57, 0)"
				},
				horzLines: {
					color: "rgba(42, 46, 57, 0.6)"
				}
			}
		});



		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth, height: chartContainerRef.current!.clientHeight });
		};
		// const areaSeries = chart.addAreaSeries();
		// areaSeries.setData(tickerVolume);
		const candleStickSeries = chart.addCandlestickSeries();
		candleStickSeries.setData(tickerData);
		const histogramSeries = chart.addHistogramSeries({ priceScaleId: '' });
		histogramSeries.priceScale().applyOptions({
			// set the positioning of the volume series
			scaleMargins: {
				top: 0.9, // highest point of the series will be 70% away from the top
				bottom: 0,
			},
		});
		histogramSeries.setData(tickerVolume);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.setTimeout(() => {
				window.removeEventListener('resize', handleResize);
				chart.remove();
			}, 0);

		};

	}, [tickerData, tickerVolume]);





	return (
		<Box sx={{ width: '100%', height: '70%', border: '1.5px solid rgba(121, 208, 13, 0.8)' }} ref={chartContainerRef}>
			<div ref={chartContainerRef}>
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
			</div>
		</Box>


	)
}

export default LightWeightChart