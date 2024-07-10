import {User} from "../../src/styles/type";

export type UserHasPasswordType = User & {
    password?: string,
    verifyCode?: string,
}
