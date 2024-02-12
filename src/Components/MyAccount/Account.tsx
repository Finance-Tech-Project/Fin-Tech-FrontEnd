import React, { useEffect, useState } from 'react'
import { AccountButtonUpdate, AccountContainer, AccountDividerGridStyle, AccountItemContainer, AccountItemTypographyEmailContainer, AccountMainGridContainerStyle, AccountTextFieldsGridStyle, AccountTitle, AccountTitleContainer, AccountTypography, AccountWrapper } from '../../Styles/MyAccountStyles/AccountStyle'
import { Divider } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { UpdateUserProfile, UserProfile } from '../../Types/LoginRegisterTypes'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { LoginRegisterTextField } from '../../Styles/LoginRegisterStyles/LoginRegisterStyle'
import { MyAccountPanelInterfaceToolbarArrowRight } from '../../Styles/MyAccountStyles/MyAccountPanelInterfaceStyle'
import { setOpenColseToolbar } from '../../Reducers/accountInterfaceReducer'
import { theme } from '../../Constants/MaterialConstants/theme'
import { divineForSignEmail, transformPassword, validationEmail } from '../../Functions/utilsFunctions'
import { deleteUser, updateUser } from '../../Actions/fetchLoginRegisterActions'
import { userLogout } from '../../Reducers/userReducer'
import { deleteToken } from '../../Reducers/tokenReducer'
import { useNavigate } from 'react-router-dom'
import { GeneralTooltipTextFieldEmail } from '../../Styles/AreCommonStyles/AreCommonStyles'
import { visibilityIconsForPassword } from '../../Constants/MaterialConstants/VisibilityIconsForPassword'

const Account = () => {
    const userProfile: UserProfile | null = useAppSelector(state => state.userReducer);
    const openCloseToolbar = useAppSelector(state => state.accountInterfaceReducer.openCloseToolbar);
    const passwordSymbols: string = useAppSelector(state => state.generalAppReducer.passwordSymbols);
    const token: string | null = useAppSelector(state => state.tokenReducer);
    const displaySize = useAppSelector(state => state.generalAppReducer.displaySize);
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [openTooltip, setOpenTooltip] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClear = () => {
        setPassword('');
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    const handleUpdate = () => {
        const userUpdate: UpdateUserProfile = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        dispatch(updateUser(userUpdate, userProfile?.login!, transformPassword(password)));
        handleClear();
    };

    const handleDeleteAccount = () => {
        dispatch(deleteUser(userProfile?.login!));
        dispatch(userLogout());
        dispatch(deleteToken());
        sessionStorage.clear();
        localStorage.removeItem('userData');
        navigate("/home");
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (validationEmail(event.target.value.trim())) {
            setEmail(event.target.value.trim());
            setOpenTooltip(false);
        } else {
            setEmail('');
            setOpenTooltip(true);
        }

        if (event.target.value.trim() === '') {
            setOpenTooltip(false);
        }
    };

    const handleDrawerOpen = () => {
        dispatch(setOpenColseToolbar(true));
    };

    useEffect(() => {
        return () => handleClear();
    }, [userProfile, token]);

    return (
        <AccountContainer>
            <Grid container>
                <Grid mobileS={11} mobileSOffset={0.5}>
                    <AccountWrapper>
                        <AccountTitleContainer>
                            <AccountTitle>My Account</AccountTitle>
                            {!openCloseToolbar && <MyAccountPanelInterfaceToolbarArrowRight onClick={handleDrawerOpen}></MyAccountPanelInterfaceToolbarArrowRight>}
                        </AccountTitleContainer>

                        <Divider orientation='horizontal'
                            sx={{
                                backgroundColor: '#966fbd',
                                borderStyle: 'solid',
                                borderWidth: '3px',
                                marginTop: '20px'
                            }} />

                        <Grid container sx={() => AccountMainGridContainerStyle(theme)}>
                            <Grid
                                mobileL={12}
                                laptopL={4.5} laptopLOffset={0}
                                desktop={5.25} desktopOffset={0}
                            >
                                <AccountItemContainer>
                                    <AccountTypography>First Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.firstName}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Last Name:</AccountTypography>
                                    <AccountTypography>{userProfile?.lastName}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Login:</AccountTypography>
                                    <AccountTypography>{userProfile?.login}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>User role:</AccountTypography>
                                    <AccountTypography>{userProfile?.role}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Password:</AccountTypography>
                                    <AccountTypography>{passwordSymbols}</AccountTypography>
                                </AccountItemContainer>

                                <AccountItemContainer>
                                    <AccountTypography>Email:</AccountTypography>
                                    <AccountItemTypographyEmailContainer>
                                        <AccountTypography>{userProfile?.email.split("@")[0]}</AccountTypography>
                                        <AccountTypography>{divineForSignEmail(userProfile?.email!)}</AccountTypography>
                                    </AccountItemTypographyEmailContainer>
                                </AccountItemContainer>

                                <AccountButtonUpdate onClick={handleDeleteAccount}>Delete Account</AccountButtonUpdate>
                            </Grid>

                            {displaySize > theme.breakpoints.values.laptopL - 1 ?
                                <Grid sx={() => AccountDividerGridStyle(theme)}
                                    laptopL={0.5} laptopLOffset={1}
                                    desktop={0.5} desktopOffset={0.5}
                                >
                                    <Divider orientation='vertical'
                                        sx={{
                                            borderWidth: '3px',
                                            backgroundColor: '#966fbd',
                                            height: '98.5%'
                                        }}
                                    />
                                </Grid>
                                :
                                <Grid>
                                    <Divider orientation='horizontal'
                                        sx={{
                                            marginTop: '10px',
                                            borderWidth: '3px',
                                            backgroundColor: '#966fbd',
                                        }}
                                    />
                                </Grid>
                            }

                            <Grid sx={() => AccountTextFieldsGridStyle(theme)}
                                mobileL={12}
                                laptopL={5} laptopLOffset={1}
                                desktop={5.25} desktopOffset={0.5}
                            >
                                <LoginRegisterTextField
                                    marginRight
                                    marginBottom
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value.trim())}
                                    value={firstName}
                                />

                                <LoginRegisterTextField
                                    marginBottom
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLastName(event.target.value.trim())}
                                    value={lastName}
                                />
                                <GeneralTooltipTextFieldEmail open={openTooltip} title="Please enter correct email address for exmpale username@domain.com, user.name@domain.com, user-name@domain.com, username@domain.co.in, user_name@domain.com">
                                    <LoginRegisterTextField
                                        marginBottom
                                        variant="outlined"
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        type="email"
                                        onChange={handleEmail}
                                    />
                                </GeneralTooltipTextFieldEmail>


                                <LoginRegisterTextField
                                    variant='outlined'
                                    fullWidth label="New Password"
                                    autoComplete="Password"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value.trim())}
                                    value={password}
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: visibilityIconsForPassword(showPassword, handleClickShowPassword, handleMouseDownPassword)
                                    }}
                                />
                                <AccountButtonUpdate onClick={handleUpdate}>Update</AccountButtonUpdate>
                            </Grid>
                        </Grid>
                    </AccountWrapper>
                </Grid>
            </Grid>
        </AccountContainer>
    )
}

export default Account