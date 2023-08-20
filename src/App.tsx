import './App.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import LightWeightChart from './Components/TradingViewLightWeightChart/LightWeightChart';
import TradingViewWidget from './Components/TradingViewWidget/TradingViewWidget';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { headerButtons } from './Constants/ProjectConstants/headerConstants';
import MarketInsight from './Components/MarketInsight/MarketInsight';
import Statistics from './Components/Statistics/Statistics';
import Analytics from './Components/Analytics/Analytics';
import Contacts from './Components/Contacts/Contacts';
import MyAccount from './Components/MyAccount/MyAccount';

function App() {
	
	return (
		
			<Grid container>
				<Routes  >
					<Route  path='/' element={<Home/>}/>
					<Route path={headerButtons[0].route} element={<Home/>} />
					<Route path={headerButtons[1].route} element={<MarketInsight />} />
					<Route path={headerButtons[2].route} element={<Statistics />} />
					<Route path={headerButtons[3].route} element={<Analytics />} />
					<Route path={headerButtons[4].route} element={<Contacts />} />
					<Route path={headerButtons[5].route} element={<MyAccount />} />
				</Routes>
				

				{/* <TradingViewWidget /> */}
				{/* <LightWeightChart /> */}
			</Grid>
	

	);
}

export default App;
