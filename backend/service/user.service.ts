import {connection} from "../database.connect";
import {UserHasPasswordType} from "../types/userHasPassword.type";
import {
    accountExist,
    accountNotExist,
    accountNotVerify,
    changePasswordFail,
    passwordNotCompare,
    registerFail, updateProfileFail,
    verifyFail,
    wrongUsernameOrPassword,
    wrongVerifyCode
} from "../errors/error.enum";
import {VerifyRequest} from "../requests/verify.request";
import {LoginRequest} from "../requests/login.request";
import {RegisterRequest} from "../requests/register.request";
import {ChangePasswordRequest} from "../requests/changePassword.request";
import {ObjectId} from "mongodb";
import {User} from "../types/user.type";

const collection = 'users';
const userRepository = connection.collection<UserHasPasswordType>(collection);

async function existUsername(username?: string): Promise<boolean> {
    const query = {username: username}
    return userRepository
        .findOne(query)
        .then((response): boolean => {
            return !!response;
        });
}

async function login(loginRequest: LoginRequest): Promise<UserHasPasswordType> {
    const exist = await existUsername(loginRequest.username);
    if (!exist)
        throw accountNotExist;
    return userRepository
        .findOne(loginRequest)
        .then((response: UserHasPasswordType | null): UserHasPasswordType => {
            if (!response) throw wrongUsernameOrPassword;
            if (response.verifyCode || response.verifyCode === "") throw accountNotVerify;
            response.password = undefined;
            response.verifyCode = undefined;
            return response;
        });
}

async function register(registerRequest: RegisterRequest): Promise<UserHasPasswordType> {
    const exist = await existUsername(registerRequest.username);
    if (registerRequest.password !== registerRequest.confirmPassword) throw passwordNotCompare;
    const user: UserHasPasswordType = {
        ...registerRequest,
        urlAvatar: "https://i.imgur.com/7bIq1J9.png",
        verifyCode: generateVerifyCode(),
    };
    if (exist) throw accountExist;
    return userRepository
        .insertOne(user)
        .then((response): UserHasPasswordType => {
            if (!response) throw registerFail;
            return {
                username: user.username,
                verifyCode: user.verifyCode,
            } as UserHasPasswordType;
        })
}

async function verify(verifyRequest: VerifyRequest): Promise<boolean> {
    const exist = await existUsername(verifyRequest.username);
    if (!exist) throw accountNotExist;
    return userRepository
        .findOne<UserHasPasswordType>(verifyRequest)
        .then((response): Promise<boolean> => {
            if (!response) throw wrongVerifyCode;
            return verifySuccess(response._id);
        });
}

async function verifySuccess(id?: ObjectId): Promise<boolean> {
    return userRepository
        .updateOne(
            {_id: id}, {
                $unset: {"verifyCode": ""},
            }).then((response): boolean => {
            return true;
        })
        .catch(() => {
            throw verifyFail;
        });
}

async function forgetPassword(username: string): Promise<boolean> {
    const exist = await existUsername(username);
    if (!exist) throw accountNotExist;
    return true;
}

async function changePassword(changePasswordRequest: ChangePasswordRequest): Promise<boolean> {
    const exist = await existUsername(changePasswordRequest.username);
    if (changePasswordRequest.password !== changePasswordRequest.confirmPassword) throw passwordNotCompare;
    if (!exist) throw accountNotExist;
    return userRepository
        .updateOne({username: changePasswordRequest.username}, {
            $set: {
                password: changePasswordRequest.password
            }
        }).then((response): boolean => {
            return true;
        })
        .catch(() => {
            throw changePasswordFail;
        });
}

async function updateProfile(user: User): Promise<User> {
    if (!user._id) throw accountNotExist;
    return await userRepository
        .findOneAndUpdate({_id: ObjectId.createFromHexString(user._id.toString())}, {
            $set: {
                birthday: user.birthday,
                email: user.email,
                fullName: user.fullName,
                phone: user.phone,
                gender: user.gender
            }
        }).then((response): User => {
            if (!response) throw updateProfileFail;
            return user;
        })
        .catch(() => {
            throw updateProfileFail;
        });
}

const generateVerifyCode = () => {
    const number = Math.floor(Math.random() * 999999);
    switch (number.toString().length) {
        case 1:
            return `00000${number}`;
        case 2:
            return `0000${number}`;
        case 3:
            return `000${number}`;
        case 4:
            return `00${number}`;
        case 5:
            return `0${number}`;
        default:
            return `${number}`;
    }
}

export {login, register, verify, forgetPassword, changePassword, updateProfile};
