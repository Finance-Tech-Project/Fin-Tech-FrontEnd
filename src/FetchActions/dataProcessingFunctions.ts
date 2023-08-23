import { MAIN_DATA, VOLUME_DATA } from "../Constants/fetchConstants";
import { ColumnType, TickerColumnType, TickerDataType, TickerDataVolumeType, TickerType } from "../Types/TickersTypes";

export const createColumns = (allTickers: Array<TickerType> | undefined) => {
	if (allTickers) {
		const tickersKeys = Object.keys(allTickers![0]);
		const res: TickerColumnType[] = tickersKeys.slice(0, 2).map((data) => {
			const newData: TickerColumnType = {
				id: data.toString() as ColumnType.symbol,
				label: data,
				index: 0
			}
			return newData;
		});
		res.forEach((ticker, index) => ticker.index = index);
		return res;
	}
};

export const createRows = (param: string, allTickers: Array<TickerType> | undefined) => {
	if (allTickers) {
		const tickersData: Array<TickerType> = allTickers!.map((ticker) => {
			const res: TickerType = {
				symbol: ticker.symbol,
				name: ticker.name,
				index: 0
			}
			return res;
		})
		tickersData.forEach((ticker, index) => ticker.index = index);
		if (param) {
			return tickersData.filter((ticker) => (ticker.symbol.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined)
				|| (ticker.name.toLowerCase().includes(param.toLowerCase()) ? ticker : undefined));
		}
		return tickersData;
	}
};

export const parseDataTicker = (dataType: string, tickerData: Array<TickerDataType>) => {
	if (dataType === MAIN_DATA) {
		const data: Array<TickerDataType> = tickerData?.map((ticker) => {
			const res: TickerDataType = {
				time: ticker.time,
				open: ticker.open,
				high: ticker.high,
				low: ticker.low,
				close: ticker.close
			}
			return res;
		});
		return data;
	}
	if (dataType === VOLUME_DATA) {
		const values: Array<TickerDataVolumeType> = [];
		tickerData?.forEach((ticker) => {
			ticker.values?.forEach((tickerValue) => {
				const res: TickerDataVolumeType = {
					time: tickerValue.time,
					value: tickerValue.value
				}
				values.push(res);
			});
		});
		return values;
	}
	return tickerData;
};

export const delimiterDataToPeriods = (period: string, data: Array<TickerDataType | TickerDataVolumeType>) => {
	if (period === "1D") {
		return data;
	}
	if (period === "1W") {
		return data.filter((ticker) => {
			const currentTime = ticker.time.toString();
			const date = new Date(currentTime);
			return date.getDay() === 5 && ticker;
		})
	}
	if (period === "1M") {
		return data.filter((ticker) => {
			const currentTime = ticker.time.toString();
			const date = new Date(currentTime);
			console.log(date.getMonth() === 11 && ticker)
			return date.getMonth() === 11 && ticker;
		})
	}
};