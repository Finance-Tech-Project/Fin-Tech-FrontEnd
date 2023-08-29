import React from 'react'
import { LoginGridLinksContainerStyle } from '../../Styles/LoginRegisterStyles/LoginStyle'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { 
	LoginAndRegisterContainer, 
	LoginRegisterAvatar, 
	LoginRegisterAvatarIcon, 
	LoginRegisterButton, 
	LoginRegisterGridContainerStyle, 
	LoginRegisterGridStyle, 
	LoginRegisterLink, 
	LoginRegisterTextField, 
	LoginRegisterTypography 
} from '../../Styles/LoginRegisterStyles/LoginRegisterStyle';
import { theme } from '../../Constants/MaterialConstants/theme';
import { RegisterContainerTextField } from '../../Styles/LoginRegisterStyles/RegisterStyle';

const Register = () => {
	return (
		<LoginAndRegisterContainer>
			<Grid container sx={() => LoginRegisterGridContainerStyle(theme)}>
				<Grid sx={() => LoginRegisterGridStyle(theme)}>
					<LoginRegisterAvatar>
						<LoginRegisterAvatarIcon />
					</LoginRegisterAvatar>

					<LoginRegisterTypography>
						Sign Up
					</LoginRegisterTypography>

					<RegisterContainerTextField>
							<LoginRegisterTextField
								marginRight
								marginBottom
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						
							<LoginRegisterTextField
								marginBottom
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
							/>
					</RegisterContainerTextField>
				</Grid>

				<Grid sx={{ width: '100%' }}>
					<LoginRegisterTextField
						marginBottom
						variant='outlined'
						margin="normal"
						fullWidth label="Password"
						autoComplete="Password"
						required
					/>
				</Grid>

				<Grid sx={{width: '100%'}}>
					<LoginRegisterButton 
						type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
					>
						Sign Up
					</LoginRegisterButton>
				</Grid>

				<Grid container sx={() => LoginGridLinksContainerStyle(theme)}>
                    <Grid>
                        <LoginRegisterLink href="/signIn" variant="body2">
                            {" Already have an account? Sign in"}
                        </LoginRegisterLink>
                    </Grid>
                </Grid>
			</Grid>
		</LoginAndRegisterContainer>
	)
}

export default Register