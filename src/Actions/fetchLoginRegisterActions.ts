import { FetchConstants, FetchConstantsForLoginRegister } from "../Enums/Enums";
import { createToken } from "../Functions/utilsFunctions";
import { putToken } from "../Reducers/tokenReducer";
import { putUserException } from "../Reducers/userExeptionsReducer";
import { putUser } from "../Reducers/userReducer";
import { Exception, UserProfile, UserRegister } from "../Types/LoginRegisterTypes";
import { AppDispatch } from "../app/store";

export const registerUser = (user: UserRegister) => {
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
            }
        } catch (error) {

        }
    }
};

export const loginUser = (token: string) => {
    return async (dispatch: AppDispatch) => {
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
                sessionStorage.setItem('userData', JSON.stringify(data));
            } else {
                const errorStatus = response.status + '';
                throw new Error(errorStatus);
            }
        } catch (error) {
            if (error instanceof Error) {
                const exception: Exception = {
                    exceptionType: parseInt(error.message),
                    exceptionMessage: "You entered is not valid user name or password or you not have account in this site. Please enter correct user name and password or go in page sign up and create you account."
                };
                dispatch(putUserException(exception));
            }
        }
    }
};