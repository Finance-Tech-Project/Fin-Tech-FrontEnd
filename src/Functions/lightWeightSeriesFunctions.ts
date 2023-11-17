import { IChartApi, LineStyle, PriceLineOptions } from "lightweight-charts";
import { TickerDataType, TickerDataVolumeType } from "../Types/TickersTypes";
import { ChartSeriesNames } from "../Enums/Enums";
import { AnalyticInterface } from "../Types/AnalyticTypes";

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
    chart: IChartApi,
    symbolData: Array<TickerDataType>,
    symbolVolume: Array<TickerDataVolumeType>,
    seriesName: string,
    movAvg?: AnalyticInterface,
    simpleIncome?: AnalyticInterface,
    volatility?: AnalyticInterface,
    sharpRatio?: AnalyticInterface
) => {
    switch (seriesName) {
        case ChartSeriesNames.CandlesSeries:
            return defaultSeries(chart, symbolData, symbolVolume);
        case ChartSeriesNames.LineSeries:
            return lineSeries(chart, symbolData, symbolVolume);
        case ChartSeriesNames.BarSeries:
            return barSeries(chart, symbolData, symbolVolume);
        case ChartSeriesNames.AreaSeries:
            return areaSeries(chart, symbolData, symbolVolume);
        case ChartSeriesNames.LineSeriesForSimpleIncome:
            return createLineSeriesForCalculationsDataInStocks(
                chart,
                seriesName,
                simpleIncome!,
            );
        case ChartSeriesNames.LineSeriesForVolatility:
            return createLineSeriesForCalculationsDataInStocks(
                chart,
                seriesName,
                volatility!,
            );
        case ChartSeriesNames.LineSeriesForSharpRatio: 
            return createLineSeriesForCalculationsDataInStocks(
                chart,
                seriesName,
                sharpRatio!,
            );
        default:
            return defaultSeries(chart, symbolData, symbolVolume);
    }
};

export const addMyLineSeries = (chart: IChartApi, volume: Array<TickerDataVolumeType>, color: string) => {
    const lineChart = chart.addLineSeries({ color: color });
    lineChart.setData(volume);
    return lineChart;
};

export const addAreaSeriesToGeneralLine = (chart: IChartApi, data: Array<TickerDataVolumeType>) => {
    const areaSeries = chart.addAreaSeries({
        lastValueVisible: false,
        crosshairMarkerVisible: false,
        lineColor: 'transparent',
        topColor: 'rgba(56, 33, 110,0.8)',
        bottomColor: 'rgba(56, 33, 110, 0.3)',
    });
    areaSeries.setData(data);
    return areaSeries;
};

export const addLineSeriesToCompare = (chart: IChartApi, data: AnalyticInterface, seriesName: ChartSeriesNames) => {
    if (data.dataToCompare!.length > 0) {
        const lineChart = chart.addLineSeries({ color: data.colorToCompare });
        lineChart.setData(data.dataToCompare!);
        // if (seriesName !== ChartSeriesNames.LineSeriesForSimpleIncome) {
        //     chart.removeSeries(lineChart);
        // }
        return lineChart;
    }
};

export const createLineSeriesForCalculationsDataInStocks = (
    chart: IChartApi,
    seriesName: ChartSeriesNames,
    dataForChart: AnalyticInterface
) => {
    if (dataForChart.data.length > 0) {
        const lineChart = addMyLineSeries(chart, dataForChart.data, dataForChart.color);
        const zeroLine: PriceLineOptions = {
            price: 0.00,
            color: dataForChart.color,
            lineWidth: 2,
            lineStyle: LineStyle.Solid,
            axisLabelVisible: true,
            title: 'zero %',
            lineVisible: true,
            axisLabelColor: dataForChart.color,
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
        addAreaSeriesToGeneralLine(chart, dataForChart.data);
        addLineSeriesToCompare(chart, dataForChart, seriesName);
        return lineChart;
    }
};



