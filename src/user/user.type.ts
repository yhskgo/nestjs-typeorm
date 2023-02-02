/* eslint-disable prettier/prettier */
export type Login = {
    email: string;
    password: string;
}

export type Register = {
    email: string;
    name: string;
    password: string;
}

export type UserInfo = {    
    name: string;
    email: string;
    uuid: string;
}

export type LoginUserInfo = {
    uuid: string;
    email: string;
    name: string;
    lastLogin: Date;
}