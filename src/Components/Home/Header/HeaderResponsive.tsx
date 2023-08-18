import { Box, Button, Collapse } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { headerButtons } from '../../../Constants/ProjectConstants/headerConstants';
import { HeaderButtonsStyle, HeaderMenuResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderStyles';

interface IsCheckedProps {
	isCklicked: boolean,
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HeaderResponsive = ({ isCklicked, handleClick }: IsCheckedProps) => {

	return (
		<HeaderMenuResponsiveContainer >
			{headerButtons.map((buttonText) => {
				return (
					<Collapse in={!isCklicked} sx={{width: '100%'}}>
						<HeaderButtonsStyle onClick={event =>  handleClick(event)} disableRipple key={buttonText} sx={{width: '100%', marginBottom: '20px', }}>{buttonText}</HeaderButtonsStyle>
					</Collapse>
				);
			})}
		</HeaderMenuResponsiveContainer>
	)
}

export default HeaderResponsive