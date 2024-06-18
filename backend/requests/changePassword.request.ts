import {LoginRequest} from "./login.request";

export type ChangePasswordRequest = & LoginRequest & {
    confirmPassword: string
}