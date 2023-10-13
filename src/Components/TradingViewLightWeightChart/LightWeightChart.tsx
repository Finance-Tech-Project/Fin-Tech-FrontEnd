/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import { Chart } from 'lightweight-charts-react-wrapper';
import React, { useEffect, useRef } from 'react'
import { ColorType, createChart } from 'lightweight-charts';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';

import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { changeChartTypeSeries } from '../../Functions/lightWeightSeriesFunctions';
import LightWeightChartButtons from './LightWeightChartButtons';
import { useAppSelector } from '../../app/hooks';

interface Props {
	tickerData: Array<TickerDataType>,
	tickerVolume: Array<TickerDataVolumeType>
}

const LightWeightChart = ({ tickerData, tickerVolume }: Props) => {
	const chartContainerRef = useRef<HTMLDivElement>(null);
	const seriesName = useAppSelector(state => state.chartSeriesReducer.seriesName);
	
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

		const handleResize = async () => {
			chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
		};

		changeChartTypeSeries(chart, tickerData, tickerVolume, seriesName!);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};
	}, [tickerData, tickerVolume, seriesName]);
	
	return (
		<ChartContainer ref={chartContainerRef}>
			<LightWeightChartButtons />
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChart