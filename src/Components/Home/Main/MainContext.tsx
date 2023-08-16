import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import { MainArrowIconButton, MainButton, MainDescr, MainHeader, MainImagePng } from '../../../Styles/MainStyles/MainContextStyle';
import pngBackground_1 from '../../../Images/PngImages/pngBackground_1.png';
import pngBackground_2 from '../../../Images/PngImages/pngBackground_2.png';
import pngBackground_3 from '../../../Images/PngImages/pngBackground_3.png';
import pngBackground_4 from '../../../Images/PngImages/pngBackground_4.png';
import MainButtons from './MainButtons';

const MainContext = () => {
	return (
		<Grid container columns={{ desktopL: 12 }} sx={{ width: '100%', paddingTop: '100px', display: 'flex' }}>
			<Grid desktopL={2} desktopLOffset={1}
				desktop={2} desktopOffset={1}
				laptopL={2} laptopLOffset={1}
			>
				<Box sx={{ width: '750px' }}>
					<MainHeader>
						Build Your Ideal Investment Portfolio
					</MainHeader>
					<MainDescr>
						Make informed investment decisions with data analysis
					</MainDescr>
					<MainButton>Get Started
						<MainArrowIconButton></MainArrowIconButton>
					</MainButton>
				</Box>
			</Grid>

			<Grid desktopL={3} desktopLOffset={6}
				desktop={4} desktopOffset={5}
				laptopL={4} laptopLOffset={5}
			>
				<Box sx={{ paddingTop: '20px' }}>
					<MainImagePng src={pngBackground_3}></MainImagePng>
				</Box>
			</Grid>
		</Grid >
	)
}

export default MainContext