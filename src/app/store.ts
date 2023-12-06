import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { intervalDataReducer } from '../Reducers/intervalDataReducer';
import { historicalDataReducer } from '../Reducers/historicalDataReducer';
import { selectedSymbolReducer } from '../Reducers/selectedSymbolReducer';
import { dateDataReducer } from '../Reducers/dateDataReducer';
import { analyticInterfaceReducer } from '../Reducers/analyticIterfaceReducer';
import { chartSeriesReducer } from '../Reducers/chartSeriesReducer';
import { generalAppReducer} from '../Reducers/generalAppReducer';
import { userReducer } from '../Reducers/userReducer';
import { tokenReducer } from '../Reducers/tokenReducer';

export const store = configureStore({
	reducer: {
		intervalDataReducer: intervalDataReducer,
		historicalDataReducer: historicalDataReducer,
		selectedSymbolReducer: selectedSymbolReducer,
		dateDataReducer: dateDataReducer,
		analyticInterfaceReducer: analyticInterfaceReducer,
		chartSeriesReducer: chartSeriesReducer,
		generalAppReducer: generalAppReducer,
		userReducer: userReducer,
		tokenReducer: tokenReducer
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
