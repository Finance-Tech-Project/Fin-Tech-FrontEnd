import { AreaSeries, CandlestickSeries, Chart, HistogramSeries, LineSeries } from 'lightweight-charts-react-wrapper';
import React, { DetailedHTMLProps, HTMLAttributes, LegacyRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import { priceData } from '../../Constants/LightWeightChartData/priceData';
import { ChartOptions, ColorType, LineData, WhitespaceData, createChart } from 'lightweight-charts';
import { volumeData } from '../../Constants/LightWeightChartData/volumeData';
import { areaData } from '../../Constants/LightWeightChartData/areaData';
import data from '../../DataFiles/data.json'
import { Box } from '@mui/material';
import { TickerDataType } from '../../Types/TickersTypes';


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
	tickerData: Array<TickerDataType>
}

const LightWeightChart = ({tickerData}: Props) => {
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
			height: 600,
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

		chart.timeScale().fitContent();

		const handleResize = () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth, height: chartContainerRef.current!.clientHeight });
		};

		// const areaSeries = chart.addAreaSeries();
		// areaSeries.setData(areaData);
		const candleStickSeries = chart.addCandlestickSeries();
		candleStickSeries.setData(tickerData);
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);

			chart.remove();
		};

	}, []);

	

	

	return (
		<Box sx={{width: '100%', height: '100%'}} ref={chartContainerRef}>
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