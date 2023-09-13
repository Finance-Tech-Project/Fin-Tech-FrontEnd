import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { intervalDataReducer } from '../Reducers/intervalDataReducer';
import { historicalDataReducer } from '../Reducers/historicalDataReducer';
import { selectedSymbolReducer } from '../Reducers/selectedSymbolReducer';



export const store = configureStore({
	reducer: {
		intervalDataReducer: intervalDataReducer,
		historicalDataReducer: historicalDataReducer,
		selectedSymbolReducer: selectedSymbolReducer
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
