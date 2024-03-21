import { NavigateFunction } from "react-router-dom";
import { FetchConstants, FetchConstantsForLoginRegister } from "../Enums/Enums";
import { createToken, getExpiredDate } from "../Functions/utilsFunctions";
import { putPasswordSymbols } from "../Reducers/generalAppReducer";
import { putToken } from "../Reducers/tokenReducer";
import { putUserException } from "../Reducers/userExeptionsReducer";
import { putUser } from "../Reducers/userReducer";
import { LocaleStorageType, SessionStorageType, UpdateUserProfile, UserExceptions, UserProfile, UserRegister } from "../Types/LoginRegisterTypes";
import { AppDispatch, RootState } from "../app/store";

export const registerUser = (user: UserRegister, passwordSymbols: string, navigate: NavigateFunction) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstantsForLoginRegister.ACCOUNT +
                FetchConstantsForLoginRegister.REGISTER
                }`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data: UserProfile = await response.json();
                dispatch(putUser(data));
                dispatch(putToken(createToken(user.login, user.password)));
                dispatch(putPasswordSymbols(passwordSymbols));
                navigate("/home");
            } else {
                const errorStatus = response.status + '';
                throw new Error(errorStatus);
            }
        } catch (error) {
            if (error instanceof Error) {
                const exception: UserExceptions = {
                    exceptionType: parseInt(error.message),
                    exceptionMessage: "The user you entered for registration is already registered. Please go to the login page and log in."
                };
                dispatch(putUserException(exception));
            }
        }
    }
};

export const loginUser = (token: string, rememberLogin: boolean, passwordSymbols: string) => {
    return async (dispatch: AppDispatch) => {
        const storage: LocaleStorageType = JSON.parse(localStorage.getItem('userData')!);
        if (!storage || new Date().getTime() > new Date(storage.expiry).getTime()) {
            try {
                const response = await fetch(`${FetchConstants.BASE_URL +
                    FetchConstantsForLoginRegister.ACCOUNT +
                    FetchConstantsForLoginRegister.LOGIN
                    }`, {
                    method: 'POST',
                    headers: {
                        Authorization: token,
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data: UserProfile = await response.json();
                    dispatch(putUser(data));
                    dispatch(putToken(token));
                    dispatch(putPasswordSymbols(passwordSymbols));

                    const sesionStorageData: SessionStorageType = {
                        passwordSymbols: passwordSymbols,
                        token: token,
                        login: data.login,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        role: data.role
                    };
                    sessionStorage.setItem('userData', JSON.stringify(sesionStorageData));

                    if (rememberLogin) {
                        const userDataItem: LocaleStorageType = {
                            value: data,
                            expiry: getExpiredDate(),
                            passwordSymbols: passwordSymbols,
                            token: token
                        };
                        localStorage.setItem('userData', JSON.stringify(userDataItem));
                    }
                } else {
                    const errorStatus = response.status + '';
                    throw new Error(errorStatus);
                }
            } catch (error) {
                if (error instanceof Error) {
                    const exception: UserExceptions = {
                        exceptionType: parseInt(error.message),
                        exceptionMessage: "The username or password you entered is invalid, or you do not have an account on this site. Please enter the correct username and password, or go to the sign-up page to create your account."
                    };
                    dispatch(putUserException(exception));
                }
            }
        }
        if (storage) {
            dispatch(putUser(storage.value));
            dispatch(putToken(token));
        }
    }
};

export const updateUser = (userUpdate: UpdateUserProfile, login: string, passwordSymbols: string) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {    
        console.log(userUpdate.password)  
        try {
            const response = await fetch(`${FetchConstants.BASE_URL +
                FetchConstantsForLoginRegister.ACCOUNT +
                FetchConstantsForLoginRegister.USER +
                FetchConstantsForLoginRegister.UPDATE + login
                }`, {
                method: 'PUT',
                body: JSON.stringify(userUpdate),
                headers: {
                    Authorization: getState().tokenReducer!,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data: UserProfile = await response.json();  
                dispatch(putUser(data));
                dispatch(putToken(userUpdate.password === '' ? getState().tokenReducer! : createToken(login, userUpdate.password)));
                dispatch(putPasswordSymbols(passwordSymbols));

                const sesionStorageData: SessionStorageType = {
                    passwordSymbols: passwordSymbols === '' ? getState().generalAppReducer.passwordSymbols : passwordSymbols,
                    token: userUpdate.password === '' ? getState().tokenReducer! : createToken(login, userUpdate.password),
                    login: data.login,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    role: data.role
                };
                
                sessionStorage.setItem('userData', JSON.stringify(sesionStorageData));
                const locStorage: LocaleStorageType = JSON.parse(localStorage.getItem('userData')!);

                if (locStorage !== null) {
                    localStorage.setItem('userData', JSON.stringify(data));
                }
            }
        } catch (error) {

        }
    }
};

export const deleteUser = (login: string) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            const response = await fetch(`${
                FetchConstants.BASE_URL +
                FetchConstantsForLoginRegister.ACCOUNT + 
                FetchConstantsForLoginRegister.REMOVE_USER + login
            }`, {
                method: 'DELETE',
                headers: {
                    Authorization: getState().tokenReducer!,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const user: UserProfile = await response.json();
                console.log(user)
            }
        } catch (error) {
            
        }
    }
};