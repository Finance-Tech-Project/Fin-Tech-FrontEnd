import { Collapse } from '@mui/material'
import { headerButtons } from '../../../Constants/ProjectConstants/headerConstants';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Link } from 'react-router-dom';
import { HeaderMenuResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderButtonsResponsiveStyle';

interface IsCheckedProps {
	isClicked: boolean,
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HeaderResponsive = ({ isClicked, handleClick }: IsCheckedProps) => {
	return (
		<HeaderMenuResponsiveContainer>
			{headerButtons.map((buttonText) => {
				return (
					<Collapse key={buttonText.route} in={!isClicked} sx={{ width: '100%' }}>
						<Link to={`/${buttonText.route}`}>
							<HeaderButtonsStyle onClick={event => handleClick(event)} disableRipple key={buttonText.route} 
												sx={{ width: '100%', marginBottom: '20px', marginTop: '20px' }}>{buttonText.title}</HeaderButtonsStyle>
						</Link>
					</Collapse>
				);
			})}
		</HeaderMenuResponsiveContainer>
	)
}

export default HeaderResponsive