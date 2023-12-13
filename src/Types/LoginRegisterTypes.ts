export interface User {
    login: string,
    firstName: string,
    lastName: string,
    email: string
}

export interface UserProfile extends User {
    roles: string[]
}

export interface UserRegister extends User {
    password: string
}

export interface State {
    user: UserProfile,
    token: string
}

export interface Exception {
    exceptionType: number,
    exceptionMessage: string,
}

export interface UserExceptions {
    exceptions: Array<Exception>
}

export interface LocaleStorageType {
    value: UserProfile,
    expiry: Date
}