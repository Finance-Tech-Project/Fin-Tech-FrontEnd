import React from 'react'
import { Box } from '@mui/material';
import { MainLogo } from '../../../Styles/HeaderStyles/LogoStyle';

const Logo = () => {
	return (
		<Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>
			<MainLogo></MainLogo>
		</Box>
	)
}

export default Logo