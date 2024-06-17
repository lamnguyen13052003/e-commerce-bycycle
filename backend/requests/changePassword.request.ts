import {LoginRequest} from "./login.request";

export type ChangePasswordRequest = {
    username: string,
    password: string,
    confirmPassword: string
}