import './App.css';
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import LightWeightChart from './Components/TradingViewLightWeightChart/LightWeightChart';
import TradingViewWidget from './Components/TradingViewWidget/TradingViewWidget';
import Home from './Components/Home/Home';


function App() {
	return (
		<Grid container>
		
				<Home />
		
			{/* <TradingViewWidget /> */}
			{/* <LightWeightChart /> */}
		</Grid>
	);
}

export default App;
