import {changePassword, forgetPassword, login, register, verify} from "../service/user.service";
import {Express} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {UserType} from "../types/user.type";
import {log} from "../server";

const TAG = "Athentication Controller"

export const runAuthController = (app: Express) => {
    app.post("/api/login", (req, res) => {
        log(TAG, "Login", req.body)
        login(req.body).then((data) => {
            res.send(Builder<ResponseApi<UserType>>()
                .code(202)
                .message("Success")
                .data(data)
                .build())
        }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/register", (req, res) => {
        log(TAG, "Register", req.body)
        register(req.body).then((data) => {
            res.send(Builder<ResponseApi<UserType>>()
                .code(202)
                .message("Success")
                .data(data)
                .build())
        }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

    app.post("/api/change-password", (req, res) => {
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

    app.post("/api/verify", (req, res) => {
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

    app.post("/api/forget-password", (req, res) => {
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

