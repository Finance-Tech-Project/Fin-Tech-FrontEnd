/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Home from './Components/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import { putDesktopMobile, putDisplaySize } from './Reducers/generalAppReducer';
import { userLogout } from './Reducers/userReducer';
import { deleteToken } from './Reducers/tokenReducer';
import { myAccountPanelInterfaceButtons } from './Constants/ProjectConstants/myAccountPanelInterfaceConstants';
import Account from './Components/MyAccount/Account';
import Watchlist from './Components/MyAccount/Watchlist';
import Portfolio from './Components/MyAccount/Portfolio';
import { UserProfile } from './Types/LoginRegisterTypes';

function App() {
	const { symbolName } = useAppSelector(state => state.selectedSymbolReducer);
	const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();

	// If main page loaded and expired date of user data storage is out, we delete data of user account from local storage and logout.
	const clearLocalStorageIfDateExpired = () => {
		const locStorage = JSON.parse(localStorage.getItem('userData')!);
		if (locStorage && new Date().getTime() > new Date(locStorage.expiry).getTime()) {
			localStorage.removeItem('userData');
			dispatch(userLogout());
			dispatch(deleteToken());
		}
	};

	useEffect(() => {
		window.addEventListener('resize', () => {
			dispatch(putDisplaySize(window.screen.width));
		});
		window.addEventListener('load', () => {
			const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|MIUI|HyperOS/i;
			dispatch(putDesktopMobile(regex.test(navigator.userAgent)));
		});
		dispatch(getSymbolDataForDefaultPeriod(symbolName));
		clearLocalStorageIfDateExpired();
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
				<Route path={headerButtons[5].route} 
					element={userProfile ? <MyAccount /> : <Navigate to={`/${headerButtonsLogin[0].route}`} />}
				>
					<Route path={myAccountPanelInterfaceButtons[0].route} element={<Account />} />
					<Route path={myAccountPanelInterfaceButtons[1].route} element={<Watchlist />} />
					<Route path={myAccountPanelInterfaceButtons[2].route} element={<Portfolio />} />
				</Route>

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
