import {User} from "../types/user.type";

export  type AuthState = {
    user?: User,
    usernameVerify?: string
}