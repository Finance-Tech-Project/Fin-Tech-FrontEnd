import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MainBackgroundColor, MainContainer } from '../../../Styles/MainStyles/MainStyles';
import MainContext from './MainContext';
import { ThemeProvider } from '@mui/material';
import MainButtons from './MainButtons';
import { theme } from '../../../Constants/MaterialConstants/theme';
import MainFindTicker from './MainFindTicker';

const Main = () => {
	const [displaySize, setDisplaySize] = useState(window.screen.width);
	
	useEffect(() => {
		window.addEventListener('resize', () => {
			setDisplaySize(window.screen.width);
		});
		
	}, [displaySize]);
	return (
		<ThemeProvider theme={theme}>
			<Grid container>
				<MainContainer>
					<MainBackgroundColor>
						<MainContext displaySize={displaySize}/>
						{displaySize > theme.breakpoints.values.laptop - 1 && <MainButtons />}
					</MainBackgroundColor>
				</MainContainer>
				<MainFindTicker displaySize={displaySize}/>
				
			</Grid>
		</ThemeProvider>
	)
}

export default Main