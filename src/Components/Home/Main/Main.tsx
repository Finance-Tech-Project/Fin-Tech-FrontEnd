import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MainBackgroundColor, MainContainer } from '../../../Styles/MainStyles/MainStyles';
import MainContext from './MainContext';

const Main = () => {
	return (
		<Grid container>
			<MainContainer>
				<MainBackgroundColor>
					<MainContext />
				</MainBackgroundColor>
			</MainContainer>
		</Grid>
	)
}

export default Main