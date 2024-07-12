import {ObjectId} from "mongodb";

export type ChangePasswordRequest = {
    _id: ObjectId,
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
}