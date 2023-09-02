import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
    LoginCheckbox,
    LoginFormControlLabel,
    LoginGridLinksContainerStyle
} from '../../Styles/LoginRegisterStyles/LoginStyle';
import { theme } from '../../Constants/MaterialConstants/theme';
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
import { Link } from '@mui/material';

const Login = () => {
    return (
        <LoginAndRegisterContainer>
            <Grid container sx={() => LoginRegisterGridContainerStyle(theme)}>
                <Grid sx={() => LoginRegisterGridStyle(theme)}>
                    <LoginRegisterAvatar>
                        <LoginRegisterAvatarIcon />
                    </LoginRegisterAvatar>
                    <LoginRegisterTypography>
                        Sign In
                    </LoginRegisterTypography>

                    <LoginRegisterTextField
                        variant='outlined'
                        margin="normal"
                        fullWidth label="Nickname"
                        autoComplete="Nickname"
                        required
                    />

                    <LoginRegisterTextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="Password"
                        autoComplete="Password"
                        required
                    />

                    <LoginFormControlLabel
                        control={<LoginCheckbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <LoginRegisterButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </LoginRegisterButton>
                </Grid>

                <Grid container sx={() => LoginGridLinksContainerStyle(theme)}>
                    <Grid>
                        <Link href="#" variant="body2" sx={{ fontSize: '1rem' }}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid>
                        <LoginRegisterLink href="/signUp" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </LoginRegisterLink>
                    </Grid>
                </Grid>
            </Grid>
        </LoginAndRegisterContainer>
    )
}

export default Login