import { Avatar, Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Login = () => {
    return (
        <Box sx={{ width: '55%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '50px' }}>
            <Grid container sx={{ width: '70%' }}>
                <Grid sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ width: '70px', height: '70px', backgroundColor: 'rgba(195, 0, 93, 0.8)' }}>
                        <LockOutlinedIcon sx={{ fontSize: '40px', color: 'rgba(203, 199, 199, 0.8)' }} />
                    </Avatar>
                    <Typography variant='h5' sx={{ color: 'rgba(203, 199, 199, 0.8)', paddingTop: '10px' }}>
                        Sign In
                    </Typography>
                    <TextField variant='outlined' margin="normal" fullWidth label="Nickname" autoComplete="Nickname" required
                        sx={{
                            
                            boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)',
                            '.MuiInputBase-input': {
                                color: 'rgba(203, 199, 199, 0.8)',
                                borderColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                    borderWidth: '1.5px',
                                   
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7276ff',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(203, 199, 199, 0.8)',
                            }
                        }}
                    />
                    <TextField variant='outlined' margin="normal" fullWidth label="Password" autoComplete="Password" required
                        sx={{
                            boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)',
                            '.MuiInputBase-input': {
                                color: 'rgba(203, 199, 199, 0.8)',
                                borderColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'rgba(70, 75, 114, 0.8)',
                                    borderWidth: '1.5px'
                                },
                                '&:hover fieldset': {
                                    borderColor: '#7276ff',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(203, 199, 199, 0.8)',
                            }
                        }}
                    />
                    <FormControlLabel sx={{ color: 'rgba(203, 199, 199, 0.8)', paddingTop: '10px' }}
                        control={<Checkbox value="remember" color="primary" sx={{ color: 'rgba(203, 199, 199, 0.8)' }} />}
                        label="Remember me"
                    />

                    <Button sx={{ marginTop: '20px', boxShadow: '16px 16px 38px 0px rgba(60,63,71,0.87)', }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </Grid>

                <Grid container sx={{ width: '100%', paddingTop: '25px', display: 'flex', justifyContent: 'space-between' }}>
                    {/* <Grid>
                                <Link href="#" variant="body2" sx={{fontSize: '1rem'}}>
                                    Forgot password?
                                </Link>
                            </Grid> */}
                    <Grid>
                        <Link href="/register" variant="body2" sx={{ fontSize: '1rem' }}>
                            {"Don't have an account? Register now"}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Login