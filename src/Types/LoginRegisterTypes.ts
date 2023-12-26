export interface UserProfile {
    login: string,
    firstName: string,
    lastName: string,
    email: string,
    role?: string,
    passwordSymbols?: string
}

export interface UserRegister extends UserProfile {
    password: string
}

export interface Exception {
    exceptionType: number,
    exceptionMessage: string,
}

export interface UserExceptions {
    exceptionType: number,
    exceptionMessage: string,
}

export interface LocaleStorageType {
    value: UserProfile,
    expiry: string,
    passwordSymbols: string
}