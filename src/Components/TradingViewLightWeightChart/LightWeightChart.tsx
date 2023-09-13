/* eslint-disable no-lone-blocks */
import { Chart } from 'lightweight-charts-react-wrapper';
import React, { useEffect, useRef, useState } from 'react'
import { ColorType, createChart } from 'lightweight-charts';
import { TickerDataType, TickerDataVolumeType } from '../../Types/TickersTypes';

import { ChartContainer } from '../../Styles/LightWeightChartStyles/LightWeightChartStyle';
import { changeChartTypeSeries } from '../../Functions/lightWeightSeriesFunctions';
import LightWeightChartButtons from './LightWeightChartButtons';

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

		changeChartTypeSeries(selectedSeries!, tickerData, tickerVolume, chart);
		chart.timeScale().fitContent();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			chart.remove();
		};

	}, [tickerData, tickerVolume, selectedSeries]);
	
	return (
		<ChartContainer ref={chartContainerRef}>
			<LightWeightChartButtons  handleChangeSeries={handleChangeSeries}/>
			<Chart {...chartContainerRef.current} autoSize={true}>
			</Chart>
		</ChartContainer>
	)
}

export default LightWeightChart