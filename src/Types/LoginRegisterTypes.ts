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

export interface Exeption {
    exeptionType: 'number',
    exeptionMessage: 'string',
}

export interface UserExeptions {
    exeptions: Array<Exeption>
}