import { FetchConstants, FetchConstantsForLoginRegister } from "../Enums/Enums";
import { createToken } from "../Functions/utilsFunctions";
import { putToken } from "../Reducers/tokenReducer";
import { putUser } from "../Reducers/userReducer";
import { UserProfile, UserRegister } from "../Types/LoginRegisterTypes";
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
            if (response.status === 401) {
                dispatch(putUser(null));
                dispatch(putToken(null));
                sessionStorage.clear();
                throw new Error('401')
                // throw new TypeError("You not authorized or you not have account in this site. Please go in page sign up and create you account or if you have account go in page sign in and authorize in system.");  
            }
            if (response.ok) {
                const data: UserProfile = await response.json();
                dispatch(putUser(data));
                dispatch(putToken(token));
                sessionStorage.setItem('userData', JSON.stringify(data));
            }
        } catch (error) {
            if (error instanceof Error) {
                // dispatch(putUser(null));
                // dispatch(putToken(null));
                // sessionStorage.clear();
                console.log(error);
            }
        }
    }
};