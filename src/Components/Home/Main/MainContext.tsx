import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, ThemeProvider } from '@mui/material';
import { MainArrowIconButton, MainButton, MainDescr, MainHeader, MainImagePng, MainImagePngContainer } from '../../../Styles/MainStyles/MainContextStyle';
import pngBackground_3 from '../../../Images/PngImages/pngBackground_3.png';
import { theme } from '../../../Constants/MaterialConstants/theme';

const MainContext = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid container columns={{ desktopL: 14.5, laptopL: 13.5, laptop: 15 }} sx={{ width: '100%', paddingTop: '100px', display: 'flex' }}>
				<Grid desktopL={4} desktopLOffset={1.5}
					desktop={5} desktopOffset={1}
					laptopL={5} laptopLOffset={1}
					laptop={7} laptopOffset={1}
					tablet={2} tabletOffset={1}
				>
					<Box sx={{ width: '100%' }}>
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

				<Grid desktopL={3} desktopLOffset={5}
					desktop={3} desktopOffset={4}
					laptopL={4} laptopLOffset={3.5}
					laptop={3} laptopOffset={2.5}
					tablet={3} tabletOffset={5}
				>
					<MainImagePngContainer>
						<MainImagePng src={pngBackground_3}></MainImagePng>
					</MainImagePngContainer>
				</Grid>
			</Grid >
		</ThemeProvider>
	)
}

export default MainContext