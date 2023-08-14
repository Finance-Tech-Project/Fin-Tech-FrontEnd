import React from 'react'
import { headerButtons } from '../../../Constants/HeaderConstants/headerConstants';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';

const HeaderButtons = () => {
	return (
		<Box sx={{ display: 'flex', paddingLeft: '300px' }}>
			{headerButtons.map((buttonText) => {
				return (
					<HeaderButtonsStyle disableRipple key={buttonText} >{buttonText}</HeaderButtonsStyle>
				);
			})}
		</Box>
	)
}

export default HeaderButtons