import {connection} from "../database.connect";
import {User} from "../types/user.type";
import {CustomError} from "../errors/custom.error.type";
import {
    accountExist,
    accountNotExist,
    accountNotVerify, changePasswordFail, passwordNotCompare,
    registerFail, verifyFail,
    wrongUsernameOrPassword, wrongVerifyCode
} from "../errors/error.enum";
import {VerifyRequest} from "../requests/verify.request";
import {LoginRequest} from "../requests/login.request";
import {RegisterRequest} from "../requests/register.request";
import {ChangePasswordRequest} from "../requests/changePassword.request";
import {ObjectId} from "mongodb";

const collection = 'user';
const userRepository = connection.collection(collection);

async function existUsername(username?: string): Promise<boolean> {
    const query = {username: username}
    return userRepository
        .findOne<User>(query)
        .then((response): boolean => {
            return response ? true : false;
        });
}

async function login(loginRequest: LoginRequest): Promise<User> {
    const exist = await existUsername(loginRequest.username);
    if (!exist)
        throw accountNotExist;
    return userRepository
        .findOne<User>(loginRequest)
        .then((response: User | null): User => {
            if (!response) throw wrongUsernameOrPassword;
            if (response.verifyCode || response.verifyCode === "") throw accountNotVerify;
            response.password = undefined;
            response.verifyCode = undefined;
            return response;
        });
}

async function register(registerRequest: RegisterRequest): Promise<User> {
    const exist = await existUsername(registerRequest.username);
    if (registerRequest.password !== registerRequest.confirmPassword) throw passwordNotCompare;
    const user: User = {
        username: registerRequest.username,
        password: registerRequest.password,
        fullName: registerRequest.fullName,
        verifyCode: generateVerifyCode(),
        urlAvatar: ""
    }
    if (exist) throw accountExist;
    return userRepository
        .insertOne(user)
        .then((response): User => {
            if (!response) throw registerFail;
            return {
                id: response.insertedId,
            } as User;
        }).catch(() => {
            throw {}
        });
}

async function verify(verifyRequest: VerifyRequest): Promise<boolean> {
    const exist = await existUsername(verifyRequest.username);
    if (!exist) throw accountNotExist;
    return userRepository
        .findOne<User>(verifyRequest)
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
        .catch((error) => {
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
        .catch((error) => {
            throw changePasswordFail;
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

export {login, register, verify, forgetPassword, changePassword};
