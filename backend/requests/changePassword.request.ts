import {LoginRequest} from "./login.request";

export type ChangePasswordRequest = {
    password: string,
    confirmPassword: string
}