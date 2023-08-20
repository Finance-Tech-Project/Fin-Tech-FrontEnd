import { Box, Button, Collapse } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { headerButtons } from '../../../Constants/ProjectConstants/headerConstants';
import { HeaderButtonsStyle, HeaderMenuResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Link } from 'react-router-dom';

interface IsCheckedProps {
	isCklicked: boolean,
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HeaderResponsive = ({ isCklicked, handleClick }: IsCheckedProps) => {

	return (
		<HeaderMenuResponsiveContainer >
			{headerButtons.map((buttonText) => {
				return (
					<Collapse key={buttonText.route} in={!isCklicked} sx={{width: '100%'}}>
						
						<Link to={`/${buttonText.route}`}>
								<HeaderButtonsStyle onClick={event =>  handleClick(event)} disableRipple key={buttonText.route} sx={{width: '100%', marginBottom: '20px', }}>{buttonText.title}</HeaderButtonsStyle>
						</Link>
					
					</Collapse>
				);
			})}
		</HeaderMenuResponsiveContainer>
	)
}

export default HeaderResponsive