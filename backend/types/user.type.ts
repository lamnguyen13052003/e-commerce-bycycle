import {ObjectId} from "mongodb";

export type UserType = {
    _id?: ObjectId
    fullName?: string,
    urlAvatar?: string,
    username?: string,
    password?: string,
    verifyCode?: string,
}
