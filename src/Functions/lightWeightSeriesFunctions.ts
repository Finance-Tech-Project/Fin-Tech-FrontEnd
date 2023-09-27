import { IChartApi, LineStyle, PriceLineOptions } from "lightweight-charts";
import { TickerDataType, TickerDataVolumeType } from "../Types/TickersTypes";

export const lineSeries = (chart: IChartApi, data: Array<TickerDataType>, volume: Array<TickerDataVolumeType>) => {
    const lineChart = chart.addLineSeries({ color: 'rgb(54, 116, 217)' });
    const lineData: Array<TickerDataVolumeType> = data.map((ticker) => ({
        time: ticker.time,
        value: (ticker.close + ticker.open) / 2,
    }));
    lineChart.setData(lineData);

    const histogramSeries = chart.addHistogramSeries({ priceScaleId: '', color: 'rgb(54, 116, 217)' });
    histogramSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        }
    });
    histogramSeries.setData(volume);
};

export const defaultSeries = (chart: IChartApi, data: Array<TickerDataType>, volume: Array<TickerDataVolumeType>) => {
    const lineData: Array<TickerDataVolumeType> = data.map((ticker) => ({
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
    candleStickSeries.setData(data);

    const histogramSeries = chart.addHistogramSeries({ priceScaleId: '', color: 'rgb(54, 116, 217)' });
    histogramSeries.priceScale().applyOptions({
        // set the positioning of the volume series
        scaleMargins: {
            top: 0.8, // highest point of the series will be 70% away from the top
            bottom: 0,
        }
    });
    histogramSeries.setData(volume);
};

export const barSeries = (chart: IChartApi, data: Array<TickerDataType>, volume: Array<TickerDataVolumeType>) => {
    const barChart = chart.addBarSeries({ upColor: 'rgb(54, 116, 217)', downColor: 'rgb(225, 50, 85)' });
    barChart.setData(data);

    const histogramSeries = chart.addHistogramSeries({ priceScaleId: '', color: 'rgb(54, 116, 217)' });
    histogramSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        }
    });
    histogramSeries.setData(volume);
};

export const areaSeries = (chart: IChartApi, data: Array<TickerDataType>, volume: Array<TickerDataVolumeType>) => {
    const areaChart = chart.addAreaSeries({ lineColor: '#2962FF', topColor: 'rgba(56, 33, 110,0.6)', bottomColor: 'rgba(56, 33, 110, 0.1)' });
    const lineData: Array<TickerDataVolumeType> = data.map((ticker) => ({
        time: ticker.time,
        value: (ticker.close + ticker.open) / 2,
    }));
    areaChart.setData(lineData);

    const histogramSeries = chart.addHistogramSeries({ priceScaleId: '', color: 'rgb(54, 116, 217)' });
    histogramSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.8,
            bottom: 0,
        }
    });
    histogramSeries.setData(volume);
};

export const changeChartTypeSeries = (
    seriesName: string,
    data: Array<TickerDataType>,
    volume: Array<TickerDataVolumeType>,
    chart: IChartApi,
    color: string,
    dataSimpleIncome: Array<TickerDataVolumeType>
) => {
    if (seriesName === 'candles') {
        return defaultSeries(chart, data, volume);
    } else if (seriesName === 'line') {
        return lineSeries(chart, data, volume);
    } else if (seriesName === 'bar') {
        return barSeries(chart, data, volume);
    } else if (seriesName === 'area') {
        return areaSeries(chart, data, volume);
    } else if (seriesName === 'simpleIncome') {
        return simpleIncomChart(chart, dataSimpleIncome, color);
    }
};

export const addMyLineSeries = (chart: IChartApi, volume: Array<TickerDataVolumeType>, color: string) => {
    const lineChart = chart.addLineSeries({ color: color });
    lineChart.setData(volume);
    return lineChart;
};

export function simpleIncomChart(chart: IChartApi, data: TickerDataVolumeType[], color: string) {
    if (data.length > 0) {
        const lineChart = addMyLineSeries(chart, data, color);
        const zeroLine: PriceLineOptions = {
            price: 0.00,
            color: '#be1238',
            lineWidth: 2,
            lineStyle: LineStyle.Solid,
            axisLabelVisible: true,
            title: 'zero %',
            lineVisible: true,
            axisLabelColor: color,
            axisLabelTextColor: ''
        };
        lineChart.createPriceLine(zeroLine);
        lineChart.applyOptions({
            // autoscaleInfoProvider: () => ({
            //     priceRange: {
            //         minValue: -50,
            //         maxValue: 500
            //     }
            // }),
            priceFormat: {
                type: "percent"
            }
        });
        return lineChart;
    }
}
