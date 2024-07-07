import {Express} from "express";
import {addReview} from "../service/review.service";
import {ReviewProductType} from "../types/reviewProduct.type";
import {ObjectId} from "mongodb";
import {Builder} from "builder-pattern";
import {ResponseApi} from "../types/response.type";
import {ProductType} from "../types/product.type";

export const runReviewController = (app: Express) => {
    const qs = require('qs')
    app.post("/api/reviews/add/productId=:productId", (req, res) => {
        const productId: ObjectId = new ObjectId(req.params.productId);
        const {user_id ,name, email, rating, comment, date } = req.body;
        const review: ReviewProductType = {
            _id: new ObjectId(),
            user_id: user_id,
            name: name,
            email: email,
            rating: rating,
            comment: comment,
            date: date
        }

        addReview(review, productId).then((response) => {
            res.send(Builder<ResponseApi<boolean>>().code(202).message("Success").data(response).build());
        }).catch((error) => {
            console.error("Failed to add review", error);
        })
    });
    app.get("/api/reviews/productId=:productId", (req, res) => {
        const productId = req.params.productId;
        console.log(productId)
        res.send({message: "Success"})
    });

}
