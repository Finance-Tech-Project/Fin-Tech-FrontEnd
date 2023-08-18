import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false;
		sm: false;
		md: false;
		lg: false;
		xl: false;
		mobileS: true,
		mobileM: true,
		mobileL: true,
		tablet: true,
		laptop: true,
		laptopL: true,
		desktop: true,
		desktopL: true
	}
}

export const theme = createTheme({
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
	components: {
		MuiTablePagination: {
			styleOverrides: {
				root: {
					border: '1px solid black', 
					backgroundColor: '#190033', 
					color: 'white', 
					'.MuiSvgIcon-root': {
						color: 'white'
					}
				}
			}
		},
	},
    breakpoints: {
        values: {
            mobileS: 321,
            mobileM: 376,
            mobileL: 426,
            tablet: 769,
            laptop: 1025,
            laptopL: 1441,
            desktop: 1921,
            desktopL: 2560
        }
    }
});
