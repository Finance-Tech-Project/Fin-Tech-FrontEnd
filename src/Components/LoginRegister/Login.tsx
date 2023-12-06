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
import { useState } from 'react';
import { loginUser } from '../../Actions/fetchLoginRegisterActions';
import { createToken } from '../../Functions/utilsFunctions';
import { useAppDispatch } from '../../app/hooks';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleSignIn = () => {
        if (login !== '' && password !== '') {
            dispatch(loginUser(createToken(login, password)));
        }
    };
    console.log(login)
    console.log(password)
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
                        fullWidth label="Login"
                        autoComplete="Login"
                        required
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value.trim())}
                    />

                    <LoginRegisterTextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="Password"
                        autoComplete="Password"
                        required
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value.trim())}
                    />

                    <LoginFormControlLabel sx={{color: 'whitesmoke'}}
                        control={<LoginCheckbox value="remember" sx={{color: 'whitesmoke'}} />}
                        label="Remember me"
                    />

                    <LoginRegisterButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </LoginRegisterButton>
                </Grid>

                <Grid container sx={() => LoginGridLinksContainerStyle(theme)}>
                    <Grid>
                        <Link href="#" variant="body2" sx={{ fontSize: '1rem', color: 'whitesmoke', textDecorationColor: 'whitesmoke' }}>
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