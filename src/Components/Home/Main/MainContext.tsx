import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider } from '@mui/material';
import { MainArrowIconButton, MainButton, MainDescr, MainHeader, MainHeaderContainer, MainImagePng, MainImagePngContainer } from '../../../Styles/MainStyles/MainContextStyle';
import pngBackground_3 from '../../../Images/PngImages/pngBackground_3.png';
import { theme } from '../../../Constants/MaterialConstants/theme';
import { DisplaySizeProps } from '../../../Types/MainTypes';

const MainContext = ({ displaySize }: DisplaySizeProps) => {	
	return (
		<ThemeProvider theme={theme}>
			<Grid container columns={{ desktopL: 16,  laptopL: 13.8, laptop: 15, tablet: 12.5, mobileL: 13.5 }} 
				sx={{ width: '100%', paddingTop: '100px', display: 'flex' }}>
				<Grid mobileS={11.5} mobileSOffset={0.35}
					mobileM={11} mobileMOffset={0.55}
					mobileL={11} mobileLOffset={1.2}
					tablet={10} tabletOffset={1.5}
					laptop={8} laptopOffset={1}
					laptopL={5} laptopLOffset={1}
					desktop={4} desktopOffset={1.5}
					desktopL={5} desktopLOffset={1.5}	
				>
					<MainHeaderContainer>
						<MainHeader>
							Build Your Ideal Investment Portfolio
						</MainHeader>
						<MainDescr>
							Make informed investment decisions with data analysis
						</MainDescr>
						<MainButton>Get Started
							<MainArrowIconButton></MainArrowIconButton>
						</MainButton>
					</MainHeaderContainer>
				</Grid>

				<Grid tablet={3} tabletOffset={0.3}
						laptop={3} laptopOffset={2}
						laptopL={4} laptopLOffset={3.8}
						desktop={3} desktopOffset={4.5}
						desktopL={3} desktopLOffset={5.5}
				>
					{displaySize > theme.breakpoints.values.laptop - 1 && <MainImagePngContainer>
						<MainImagePng src={pngBackground_3}></MainImagePng>
					</MainImagePngContainer>}
				</Grid>
			</Grid >
		</ThemeProvider>
	)
}

export default MainContext