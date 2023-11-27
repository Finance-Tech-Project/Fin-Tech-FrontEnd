import './App.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { headerButtons, headerButtonsLogin } from './Constants/ProjectConstants/headerConstants';
import MarketInsight from './Components/MarketInsight/MarketInsight';
import Stocks from './Components/Stocks/Stocks';
import Analytics from './Components/Analytics/Analytics';
import Contacts from './Components/Contacts/Contacts';
import MyAccount from './Components/MyAccount/MyAccount';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { getSymbolDataForDefaultPeriod } from './Actions/fetchDispatchActions';
import { putDisplaySize } from './Reducers/displaySizeReducer';


function App() {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		window.addEventListener('resize', () => {
			dispatch(putDisplaySize(window.screen.width));
		});
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
	}, [symbolName]);

	return (
		<Grid container>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path={headerButtons[0].route} element={<Home />} />
				<Route path={headerButtons[1].route} element={<MarketInsight />} />
				<Route path={headerButtons[2].route} element={<Stocks />} />
				<Route path={headerButtons[3].route} element={<Analytics />} />
				<Route path={headerButtons[4].route} element={<Contacts />} />
				<Route path={headerButtons[5].route} element={<MyAccount />} />

				{headerButtonsLogin.map((path) => {
					return (
						<Route path={path.route} key={path.route} element={<LoginRegister pathRoute={path.route} />} />
					);
				})};
			</Routes>
		</Grid>
	);
}

export default App;
