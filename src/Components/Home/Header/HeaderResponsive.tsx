import { Collapse } from '@mui/material'
import { headerButtonsResponsive } from '../../../Constants/ProjectConstants/headerConstants';
import { HeaderButtonsStyle } from '../../../Styles/HeaderStyles/HeaderStyles';
import { Link } from 'react-router-dom';
import { HeaderMenuResponsiveContainer } from '../../../Styles/HeaderStyles/HeaderButtonsResponsiveStyle';
import { useAppSelector } from '../../../app/hooks';

interface IsCheckedProps {
	isClicked: boolean,
	handleClick: (param: string) => void
}

const HeaderResponsive = ({ isClicked, handleClick }: IsCheckedProps) => {
	const userProfile = useAppSelector(state => state.userReducer);

	const buttonsSlice = () => {
		return !userProfile ? headerButtonsResponsive 
			: headerButtonsResponsive.filter(item => item.title !== 'Sign In' && item.title !== 'Sign Up');
	};

	return (
		<HeaderMenuResponsiveContainer>
			{buttonsSlice().map((buttonText) => {
				return (
					<Collapse key={buttonText.title} in={!isClicked}  sx={{ width: '100%' }}>
						<Link to={`/${buttonText.route}`}>
							<HeaderButtonsStyle onClick={() => handleClick(buttonText.title)}  disableRipple  
												sx={{ width: '100%', marginBottom: '20px', marginTop: '20px' }}>{buttonText.title}</HeaderButtonsStyle>
						</Link>
					</Collapse>
				);
			})}
		</HeaderMenuResponsiveContainer>
	)
}

export default HeaderResponsive