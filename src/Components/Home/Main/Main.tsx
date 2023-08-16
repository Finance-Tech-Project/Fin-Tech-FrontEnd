import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MainBackgroundColor, MainContainer } from '../../../Styles/MainStyles/MainStyles';
import MainContext from './MainContext';
import { Box, ThemeProvider } from '@mui/material';
import MainButtons from './MainButtons';
import Container from '@mui/material/Container';
import { theme } from '../../../Constants/MaterialConstants/theme';

const Main = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid container >
				<MainContainer>
					<MainBackgroundColor>
						<MainContext />
						<MainButtons />
					</MainBackgroundColor>
				</MainContainer>
			</Grid>
		</ThemeProvider>
	)
}

export default Main