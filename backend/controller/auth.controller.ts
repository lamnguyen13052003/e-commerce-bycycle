import {changePassword, forgetPassword, login, register, verify} from "../service/user.service";
import {Express, Request} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {UserHasPasswordType} from "../types/userHasPassword.type";
import {log} from "../server";

const TAG = "Authentication Controller"

export const runAuthController = (app: Express) => {
    app.post("/api/auth/login", (req, res) => {
        log(TAG, "Login", req.body)
        login(req.body).then((data) => {
            res.send(Builder<ResponseApi<UserHasPasswordType>>()
                .code(202)
                .message("Success")
                .data(data)
                .build())
        }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/auth/register", (req, res) => {
        log(TAG, "Register", req.body)
        register(req.body).then((data) => {
            res.send(Builder<ResponseApi<UserHasPasswordType>>()
                .code(202)
                .message(`Mã xác thực là: ${data.verifyCode}`)
                .data(data)
                .build())
        }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/auth/change-password", (req, res) => {
        log(TAG, "Change password", req.body)
        changePassword(req.body)
            .then((data) => {
                res.send(Builder<ResponseApi<boolean>>()
                    .code(202)
                    .message("Success")
                    .data(data)
                    .build())
            }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/auth/verify", (req, res) => {
        log(TAG, "Verify", req.body)
        verify(req.body)
            .then((data) => {
                res.send(Builder<ResponseApi<boolean>>()
                    .code(202)
                    .message("Success")
                    .data(data)
                    .build())
            }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/auth/forget-password", (req, res) => {
        log(TAG, "Forget password", req.body)
        forgetPassword(req.body)
            .then((data) => {
                res.send(Builder<ResponseApi<boolean>>()
                    .code(202)
                    .message("Success")
                    .data(data)
                    .build())
            }).catch((error) => {
            res.status(error.code).send(error)
        })
    });
}

