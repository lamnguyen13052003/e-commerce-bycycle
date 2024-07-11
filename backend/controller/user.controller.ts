import {Express, Request} from "express";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {log} from "../server";
import {User} from "../types/user.type";
import {updateProfile} from "../service/user.service";

const TAG = "User Controller"

export const runUserController = (app: Express) => {
    app.put("/api/user/update-profile", (
        req: Request<any, any, User, any, any>,
        res) => {
        log(TAG, "Change password", req.body)
        updateProfile(req.body)
            .then((data) => {
                res.send(Builder<ResponseApi<User>>()
                    .code(202)
                    .message("Success")
                    .data(data)
                    .build())
            }).catch((error) => {
            res.status(error.code).send(error)
        })
    });

}

