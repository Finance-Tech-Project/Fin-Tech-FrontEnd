import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Typography } from '@mui/material';
import { MainArrowIconButton, MainButton, MainButtonsLink, MainButtonsLinkTextDescr, MainButtonsLinkTextHeader, MainDescr, MainHeader, MainImagePng } from '../../../Styles/MainStyles/MainContextStyle';
import pngBackground_1 from '../../../Images/PngImages/pngBackground_1.png';
import pngBackground_2 from '../../../Images/PngImages/pngBackground_2.png';
import pngBackground_3 from '../../../Images/PngImages/pngBackground_3.png';
import pngBackground_4 from '../../../Images/PngImages/pngBackground_4.png';

const MainContext = () => {
	return (
		<Grid container>
			<Box sx={{width: '100%', paddingTop: '100px', paddingLeft: '160px', display: 'flex'}}>
				<Box sx={{ width: '750px'}}>
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
				<Box sx={{paddingLeft: '250px', paddingTop: '20px'}}>
					<MainImagePng src={pngBackground_3}></MainImagePng>
				</Box>
			</Box>
			<Box>
				<MainButtonsLink>
					<Box >
						<MainButtonsLinkTextDescr>
							Exploring securities trends
						</MainButtonsLinkTextDescr>
						<MainButtonsLinkTextHeader>
							Statistics
						</MainButtonsLinkTextHeader>
						<></>
					</Box>
				</MainButtonsLink>
			</Box>
		</Grid>
	)
}

export default MainContext