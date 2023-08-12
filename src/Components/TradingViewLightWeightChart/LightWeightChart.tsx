import { AreaSeries, CandlestickSeries, Chart, HistogramSeries, LineSeries } from 'lightweight-charts-react-wrapper';
import React, { useEffect, useRef, useState } from 'react'
import { priceData } from '../../Constants/LightWeightChartData/priceData';
import { ChartOptions, ColorType, LineData, WhitespaceData } from 'lightweight-charts';
import { volumeData } from '../../Constants/LightWeightChartData/volumeData';
import { areaData } from '../../Constants/LightWeightChartData/areaData';
import data from '../../data.json'

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

const LightWeightChart = () => {
	const [dataAPY, setDataAPY] = useState<Array<LineData | WhitespaceData>>(parseData(0));
	const [dataClose, setDataClose] = useState<Array<LineData | WhitespaceData>>(parseData(1));
	
	const options: any = {
		width: 1800,
		height: 1200,
		rightPriceScale: {
			scaleMargins: {
				top: 0.3,
				bottom: 0.25
			},
			borderVisible: false
		},
		layout: {
			background: {
				type: ColorType.Solid,
				color: "#131722"
			},
			textColor: "#d1d4dc"
		},
		grid: {
			vertLines: {
				color: "rgba(42, 46, 57, 0)"
			},
			horzLines: {
				color: "rgba(42, 46, 57, 0.6)"
			}
		}
	};



	useEffect(() => {


	}, []);

	console.log(dataAPY)

	return (
		<div>LightWeightChart
			<Chart {...options}>
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
					data={volumeData}
					topColor="rgba(38,198,218, 0.56)"
					bottomColor="rgba(38,198,218, 0.04)"
					lineColor="rgba(38,198,218, 1)"
					lineWidth={2}
				/> */}
				<LineSeries data={dataAPY} />
				<LineSeries data={dataClose} color="rgba(234,13,17, 92)"/>
			</Chart>


		</div>
	)
}

export default LightWeightChart