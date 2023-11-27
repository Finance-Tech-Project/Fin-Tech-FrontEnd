import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { intervalDataReducer } from '../Reducers/intervalDataReducer';
import { historicalDataReducer } from '../Reducers/historicalDataReducer';
import { selectedSymbolReducer } from '../Reducers/selectedSymbolReducer';
import { dateDataReducer } from '../Reducers/dateDataReducer';
import { analyticInterfaceReducer } from '../Reducers/analyticIterfaceReducer';
import { chartSeriesReducer } from '../Reducers/chartSeriesReducer';
import { displaySizeReducer } from '../Reducers/displaySizeReducer';



export const store = configureStore({
	reducer: {
		intervalDataReducer: intervalDataReducer,
		historicalDataReducer: historicalDataReducer,
		selectedSymbolReducer: selectedSymbolReducer,
		dateDataReducer: dateDataReducer,
		analyticInterfaceReducer: analyticInterfaceReducer,
		chartSeriesReducer: chartSeriesReducer,
		displaySizeReducer: displaySizeReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
