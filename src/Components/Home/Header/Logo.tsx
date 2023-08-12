import React from 'react'
import { Box } from '@mui/material';
import {ReactComponent as LogoHeader} from '../../../Images/Logo/Group 1.svg'
const Logo = () => {
	return (
		<Box sx={{paddingLeft: '50px'}}>
			<LogoHeader></LogoHeader>
		</Box>
	)
}

export default Logo